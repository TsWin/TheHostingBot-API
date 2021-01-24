async function getFile(serverID) {
    try {
        // let whmcsFile = require(`../../root/thehostingbot/databases/whmcs/${serverID}.json`);
        // let pteroFile = require(`../../root/thehostingbot/databases/pterodactyl/${serverID}/config.json`);
        const whmcsFile = require(`../../${serverID}.json`);
        const pteroFile = require(`../../${serverID}/config.json`);
        var whmcsResponse;
        var pteroResponse;

        if (!whmcsFile) {
            let response = { status: 404, error: 'Not Found', msg: 'WHMCS: Serveur introuvable' }
            return response
        } else if (!pteroFile) {
            let response = { status: 404, error: 'Not Found', msg: 'PTERO: Serveur introuvable' }
            return response
        }
        let whmcsActivated = whmcsFile.activated;
        let pteroActivated = pteroFile.activated;

        if (whmcsActivated === 'yes') {
            whmcsResponse = { status: 200, msg: 'WHMCS: Serveur Autorisé' }
        } else if (whmcsActivated === 'no') {
            whmcsResponse = { status: 401, error: 'Unauthorized', msg: `WHMCS: Serveur non Autorisé` }
        }

        if (pteroActivated === 'yes') {
            pteroResponse = { status: 200, msg: 'PTERO: Serveur Autorisé' }
        } else if (pteroActivated === 'no') {
            pteroResponse = { status: 401, error: 'Unauthorized', msg: `PTERO: Serveur non Autorisé` }
        }

        return { whmcsResponse, pteroResponse }
    } catch (error) {
        if (error.name == 'Error' && error.code == `MODULE_NOT_FOUND`) {
            let response = { status: 404, error: 'Not Found', msg: 'Serveur introuvable' }
            return response
        } else {
            response = { status: 500, error: 'Unknown Error', msg: `Une erreur c\'est produite: ${error}` }
            return response;
        }
    }
    

}

module.exports = { getFile };
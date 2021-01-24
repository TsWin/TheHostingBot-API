const router = require('express').Router();
const { getFile } = require('../Checker/check')

router.get('/verify/:serverID', async (req, res) => {
    const serverID = req.params.serverID
    try {
         const check = await getFile(serverID)
        res.status(200).json(check);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 500, error: 'Unknown Error', msg: `Une erreur c\'est produite: ${error}`})
    }
})


module.exports = router;
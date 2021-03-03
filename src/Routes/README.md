## Ajouts:

- `hosts.js`

Fichier issu du repository: [WebSite-Ping-API](https://github.com/TsWin/WebSite-Ping-API/tree/master/src/Routes)

## Modifications:


```js index.js
// const { Router } = require('express');

// const router = require('express').Router();
// const verifier = require('./verify');
// l.5:
const hosts = require('./hosts');


// router.use('/clients', verifier)
// l.8:
router.use('/host', hosts)
// module.exports = router;
```


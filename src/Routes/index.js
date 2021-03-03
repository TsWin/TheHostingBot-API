const { Router } = require('express');

const router = require('express').Router();
const verifier = require('./verify');
const hosts = require('./hosts');

router.use('/clients', verifier)
router.use('/host', hosts)
module.exports = router;
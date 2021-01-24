const { Router } = require('express');

const router = require('express').Router();
const verifier = require('./verify');

router.use('/clients', verifier)
module.exports = router;
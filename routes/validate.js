const express = require('express');
const router = express.Router();
const validateEmailSyntax = require('../controllers/validateEmailSyntax');

router.post('/', validateEmailSyntax.validateEmailSyntax);

module.exports = router;

const validateEmailSyntax = async (req, res) => {
    const email = req.body.email.trim();
    const regex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
    if (regex.test(email)) {
        res.status(200).send({ valid: true });
    } else {
        res.status(200).send({ valid: false });
    } 
}

module.exports = {
    validateEmailSyntax
}
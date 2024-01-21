const express = require("express");
const { sendContactUsEmail } = require("../controller/contactUsController");
const router = express.Router();

router.route("/contactUs")
.post(
    sendContactUsEmail
)

module.exports = router;
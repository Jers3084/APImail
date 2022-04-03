const { Router } = require("express");
const router = Router();
const { sendmail } = require("../controller/mailController");

router.post("/", sendmail);

module.exports = router;
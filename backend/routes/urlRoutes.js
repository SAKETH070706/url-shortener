const express = require("express");
const { createShortUrl, redirectUrl,getStats } = require("../controllers/urlController");

const router = express.Router();

router.post("/shorten", createShortUrl);
router.get("/:code", redirectUrl);
router.get("/stats/:code", getStats);

module.exports = router;

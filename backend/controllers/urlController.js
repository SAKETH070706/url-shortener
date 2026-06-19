const Url = require("../models/Url");
const shortid = require("shortid");

// Create short URL
exports.createShortUrl = async (req, res) => {
  try {
    const { longUrl, customCode } = req.body;
    
    if(!longUrl) {
      return res.status(400).json({ message: "URL is required" });
    }
    const existing = await Url.findOne({ longUrl });
  
    if (existing) {
      return res.json({ shortUrl: `${req.headers.host}/${existing.shortCode}` });
    }

    const regerex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!regerex.test(longUrl)) {
      return res.status(400).json({ message: "Invalid URL" });
    }
    if(longUrl.length > 2048) {
      return res.status(400).json({ message: "URL is too long" });
    }
    if(!longUrl.startsWith("http://") && !longUrl.startsWith("https://")) {
      return res.status(400).json({ message: "URL must start with http:// or https://" });
    }
    if(longUrl.includes(" ")) {
      return res.status(400).json({ message: "URL must not contain spaces" });
    }
    if(!longUrl.match(/^[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+$/)) {
      return res.status(400).json({ message: "URL contains invalid characters" });
    }
    if(longUrl.length < 10) {
      return res.status(400).json({ message: "URL is too short" });
    }
    const shortCode = customCode || shortid.generate();

    const newUrl = new Url({ longUrl, shortCode });
    await newUrl.save();

    res.json({ shortUrl: `${req.headers.host}/${shortCode}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Redirect to long URL
exports.redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.code });
    if (url) {
      url.clicks++;
      await url.save();
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json({ message: "Not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get stats for a short URL
exports.getStats = async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.code });
    if (!url) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json({
      longUrl: url.longUrl,
      shortCode: url.shortCode,
      clicks: url.clicks,
      createdAt: url.createdAt
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
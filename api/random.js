// api/random.js
module.exports = (req, res) => {
  const images = [
    "https://files.catbox.moe/horqcv.png",
    "https://files.catbox.moe/pn388z.png",
    "https://files.catbox.moe/88atwf.png",
    "https://files.catbox.moe/x1hsd9.png",
    "https://files.catbox.moe/y5qj41.png",
    "https://files.catbox.moe/rxzu4p.png",
    "https://files.catbox.moe/zdoy55.png"
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Add unique timestamp param to bust Discord cache
  const urlWithTimestamp = `${randomImage}?ts=${Date.now()}`;

  res.setHeader('Cache-Control', 'no-store');
  res.statusCode = 302;
  res.setHeader('Location', urlWithTimestamp);
  res.end();
};

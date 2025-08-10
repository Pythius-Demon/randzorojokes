// api/random.js
export default function handler(req, res) {
  const images = [
    "https://files.catbox.moe/horqcv.png",
    "https://files.catbox.moe/pn388z.png",
    "https://files.catbox.moe/88atwf.png",
    "https://files.catbox.moe/x1hsd9.png",
    "https://files.catbox.moe/y5qj41.png",
    "https://files.catbox.moe/rxzu4p.png",
    "https://files.catbox.moe/zdoy55.png"
  ];

  // Pick random image
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Append cache-busting query
  const cacheBustedUrl = `${randomImage}?nocache=${Date.now()}`;

  // Redirect to the random image
  res.redirect(cacheBustedUrl);
}

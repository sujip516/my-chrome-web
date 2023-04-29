const img = ["4.png", "5.png", "6.png"];
const randomImg = img[Math.floor(Math.random() * img.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${randomImg}`;
document.body.appendChild(bgImg);

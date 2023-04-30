const div = document.querySelector(".front-img");
const images = ["1.png", "2.png", "3.png"];
const randomImgs = images[Math.floor(Math.random() * images.length)];
const frontImg = document.createElement("img");

frontImg.src = `img/${randomImgs}`;
div.appendChild(frontImg);

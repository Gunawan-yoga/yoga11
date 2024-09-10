setTimeout(function () {
  alert("Selamat datang di toko kami");
}, 3000);

const heroText = document.querySelector("#hero h2");
const colors = ["#FF5733", "#33FF57", "#3357FF"];
let colorIndex = 0;

function changeHeroTextColor() {
  heroText.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeHeroTextColor, 2000);

const productImages = document.querySelectorAll(".product-card img");

productImages.forEach((image) => {
  image.addEventListener("click", () => {
    image.style.transform = "scale(1.5)";
    image.style.transition = "transform 0.5s";
  });
  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });
});

const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const gradiant = document.querySelector("#gradiant");
const body = document.querySelector("body");
const gradientValue = document.querySelector("h3");
const h1 = document.querySelector("h1");

const addGradient = function () {
  const gradientString =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  body.style.background = gradientString;
  gradientValue.textContent =
    `Left Color = ` + color1.value + " , " + "Right Color = " + color2.value;
  h1.style.color = gradientString;
};

color1.addEventListener("input", addGradient);
color2.addEventListener("input", addGradient);

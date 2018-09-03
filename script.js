let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient")
let button = document.querySelector(".random")

console.log(color1.value);
color1.value = "#8201f7"
color2.value = "#B24380"

button.addEventListener("click", () => {
  color1.value = setRandomColor()
  color2.value = setRandomColor()
  setGradient()
})



// color1.value = setRandomColor()
console.log(setRandomColor());

console.log(color1.value);



function setRandomColor () {
  let rand1 = Math.floor(Math.random() * 256)
  let rand2 = Math.floor(Math.random() * 256)
  let rand3 = Math.floor(Math.random() * 256)

  return `#${("000" + (Math.random()*(1<<24)|0).toString(16)).substr(-6)}`

}

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
  css.textContent = body.style.background
  console.log(color1);
  console.log(color2);
  
  
}

setGradient()



// console.log(css);
// console.log(color1);
// console.log(color2);

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)
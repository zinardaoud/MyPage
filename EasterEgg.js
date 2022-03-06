
const body= document.querySelector("body");
const button = document.querySelector("button");
const colors = ["linear-gradient(135deg, #00416a, #e4e5e6)","linear-gradient(135deg, #ffd89b, #19547b)", "linear-gradient(135deg, #fffbd5, #b20a2c)", "linear-gradient(135deg, #403b4a, #e7e9bb)", "linear-gradient(135deg, #f0c27b, #4b1248)", "linear-gradient(135deg, #1d2b64, #f8cdda)"]

button.addEventListener("click", function(){
    const colorIndex= parseInt(Math.random()*colors.length);
    body.style.background = colors[colorIndex];
})
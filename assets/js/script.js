function pintar(color) {
    ele = document.getElementById("ele1")
    ele.style.color = color
}
ele = document.getElementById("ele1")
ele.addEventListener("click", () => pintar("yellow"));
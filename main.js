const boton = document.querySelector("#icono");
const enlaces = document.querySelector(".enlaces");

boton.addEventListener("click", () => {
   enlaces.classList.toggle("dos");
});

window.addEventListener("resize", () => {
   enlaces.classList.remove("dos");
});


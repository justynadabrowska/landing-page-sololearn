const btn = document.querySelector(".btn");
const submenu = document.querySelector(".submenu");

btn.addEventListener("click", () => {
  submenu.classList.toggle("submenu-show");
});

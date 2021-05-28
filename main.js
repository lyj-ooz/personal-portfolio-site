const cover = document.querySelector(".cover");
const coverBtn = document.querySelector(".cover-btn");

coverBtn.addEventListener("click", removeCover);

function removeCover() {
  cover.style.opacity = "0";

  setTimeout(() => {
    cover.remove();
  }, 1000);
}

const backdrop = document.getElementById("backdrop");
const reMoveButton = document.getElementById("ri-section__mobile-popup_img");
const popUp = document.getElementById("ri-section__mobile-popup");
const menu = document.getElementById("ri-section__mobile");

const toRemove = () => {
    backdrop.classList.remove("visible");
    popUp.classList.remove("visible");
}

menu.addEventListener("click", () => {
  popUp.classList.toggle("visible");
  backdrop.classList.toggle("visible");
});

backdrop.addEventListener("click", toRemove)
reMoveButton.addEventListener("click", toRemove)




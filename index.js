const navLinks = document.querySelector(".nav-links");

function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[90%]");
}

//Modal
const modal = document.getElementById("custom-modal");

const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalParagraph = document.getElementById("modal-paragraph");

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const cardImg = card.querySelector(".card-img").src;
    const cardTitle = card.querySelector(".card-title").textContent;
    const cardPara = card.querySelector(".card-paragraph").textContent;

    modalImage.src = cardImg;
    modalTitle.textContent = cardTitle;
    modalParagraph.textContent = cardPara;

    modal.style.display = "block";
  });
});

const closeModal = () => {
  modal.style.display = "none";
};

modal.querySelector(".close").addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

const parallaxBackground = document.querySelector(".parallax-bg");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const translateY = scrollPosition * -0.3; // Adjust the multiplier for the desired parallax effect

  parallaxBackground.style.transform = `translateY(${translateY}px)`;
});

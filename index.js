const mainCard = document.getElementById("main-card");
const buttonCards = document.querySelectorAll(".button-card");

buttonCards.forEach(button => {
    button.addEventListener("click", event => {
        mainCard.classList.add("flipped");
        mainCard.style.backgroundColor = Math.random() > 0.5 ? "black" : "white";
        setTimeout(() => {
            mainCard.classList.remove("flipped");
            mainCard.style.backgroundColor = "#bfa6ea";
        }, 500);
    });
});

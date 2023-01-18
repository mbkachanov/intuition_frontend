const mainCard = document.getElementById("main-card");
const buttonCards = document.querySelectorAll(".button-card");

buttonCards.forEach(button => {
    button.addEventListener("click", event => {
        let randomColor = Math.random() > 0.5 ? "black" : "white"
        let guessResult = event.target.id == randomColor ? "shadow-success" : "shadow-failure"

        mainCard.classList.remove("main-card-gradient");
        mainCard.classList.add("flipped", randomColor);

        event.target.classList.add(guessResult);

        setTimeout(() => {
            mainCard.classList.remove("flipped", randomColor);
            mainCard.classList.add("main-card-gradient");
            event.target.classList.remove(guessResult);
        }, 500);
    });
});

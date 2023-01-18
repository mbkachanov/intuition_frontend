const mainCard = document.getElementById("main-card");
const buttonCards = document.querySelectorAll(".button-card");

buttonCards.forEach(button => {
    button.addEventListener("click", event => {
        let randomColor = Math.random() > 0.5 ? "black" : "white"
        let guessResult = event.target.id == randomColor ? "shadow-success" : "shadow-failure"
        console.log(event.target.id == randomColor, guessResult)
        mainCard.classList.add("flipped", guessResult);
        mainCard.style.backgroundColor = randomColor;
        setTimeout(() => {
            mainCard.classList.remove("flipped", guessResult);
            mainCard.style.backgroundColor = "#bfa6ea";
        }, 500);
    });
});

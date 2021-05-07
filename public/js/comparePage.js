const pokeOne = document.getElementById("poke1");
const pokeTwo = document.getElementById("poke2");
const results = document.querySelector(".compare-result");

function animateWinner(){
    let getFirstWord = results.textContent.trim().replace(/ .*/,'');
    const winner = document.getElementById(getFirstWord)
    winner.classList.add("winner")
    winner.style.animationPlayState = "running";
}

animateWinner();


const battleInactive = document.querySelector(".battle-inactive");
const battleActive = document.querySelector(".battle-active");
const testBattle = document.getElementById("test");
const resetBattle = document.getElementById("reset");


testBattle.addEventListener("click", ()=>{
    battleInactive.style.display = "none";
    battleActive.style.display = "block"; 
})
resetBattle.addEventListener("click", ()=>{
    battleInactive.style.display = "block";
    battleActive.style.display = "none"; 
})

// console.log(battleInactive);
// for(const arenaBtn of battleInactive){
//     console.log("click")
//     arenaBtn.addEventListener("click", () => {
//         battleInactive.style.display = "none";
//         battleActive.style.display = "block";
//         console.log("click")
//     })
// }






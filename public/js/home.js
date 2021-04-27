
const formSelector = document.querySelector(".form-wrapper");
const inputSelector = document.querySelector("#pokemonOne");
const formChanger = document.querySelectorAll('.formChanger');
for (const formChange of formChanger){
    let addInput = false;
    formChange.addEventListener('click', (e)=>{
        console.log(e.target.innerText);
        if (e.target.innerText == "Compare") {
            if (addInput == false) {
                console.log("if statement working")
                let newInput = document.createElement("INPUT");
                newInput.setAttribute("type", "text")
                newInput.setAttribute("id", "pokemonTwo")
                newInput.setAttribute("name", "pokemonTwo")
                newInput.setAttribute("placeholder", "Name or Number")
                let newButton = document.createElement("BUTTON");
                newButton.setAttribute("type", "submit");
                newButton.setAttribute("class", "continue-90");
                let newImg = document.createElement("IMG")
                newImg.setAttribute("src", "/img/icons/enter.svg")
                newButton.appendChild(newImg);
                let newSpan = document.createElement("SPAN");
                newSpan.appendChild(newInput);
                newSpan.appendChild(newButton);
                formSelector.appendChild(newSpan);
                addInput = true;
            }
        }
        inputSelector.placeholder = e.target.innerText;
    })
};
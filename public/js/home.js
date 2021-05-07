
const formSelector = document.querySelector(".form-wrapper");
const inputSelector = document.querySelector("#pokemonOne");
const formChanger = document.querySelectorAll('.formChanger');
for (const formChange of formChanger){
    let addInput = false;
    formChange.addEventListener('click', (e)=>{
        if (e.target.innerText == "Compare") {
            if (addInput == false) {
                inputSelector.placeholder = "Pokemon 1: Name or Number";
                let newInput = document.createElement("INPUT");
                newInput.setAttribute("type", "text")
                newInput.setAttribute("id", "pokemonTwo")
                newInput.setAttribute("name", "pokemonTwo")
                newInput.setAttribute("placeholder", "Pokemon 2: Name or Number")
                newInput.setAttribute("minlength", "1")
                newInput.setAttribute("maxlength", "12")
                newInput.setAttribute("size", "25")
                let newButton = document.createElement("BUTTON");
                newButton.setAttribute("type", "submit");
                newButton.setAttribute("class", "continue-90");
                let newImg = document.createElement("IMG")
                newImg.setAttribute("src", "/img/icons/enter.svg")
                newButton.appendChild(newImg);
                let newSpan = document.createElement("SPAN");
                newSpan.id = "newSpan";
                newSpan.appendChild(newInput);
                newSpan.appendChild(newButton);
                formSelector.appendChild(newSpan);
                formSelector.setAttribute("action", "/compare");
                addInput = true;
            } else if(addInput == true) {
                inputSelector.placeholder = "Pokemon 1: Name or Number";
                document.getElementById("newSpan").style.display = "flex";
                inputSelector.setAttribute("name", e.target.dataset.body);
                formSelector.setAttribute("action", "/compare");
            }
        } else if(document.getElementById("newSpan") && document.getElementById("newSpan").style.display != "none") {
            document.getElementById("newSpan").style.display = "none";
            inputSelector.placeholder = e.target.innerText;
            inputSelector.setAttribute("name", e.target.dataset.body);
            formSelector.setAttribute("action", `/${e.target.dataset.action}`);
        } else{
            inputSelector.placeholder = e.target.innerText;
            inputSelector.setAttribute("name", e.target.dataset.body);
            formSelector.setAttribute("action", `/${e.target.dataset.action}`);
            
        }      
    })
};
function commencerJeu() {

    console.log(document.querySelector("#num-myst").textContent);

    if(document.querySelector("#num-myst").textContent === ""){
        alert("Veuillez renseigner le nombre maximum recherché !")
    }
    else {
        document.querySelector("#presentation").style.display = "none";
        document.querySelector("#jeu").style.display = "block"

        let numMyst = parseFloat(document.querySelector("#num-myst").textContent);
        console.log(numMyst);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  


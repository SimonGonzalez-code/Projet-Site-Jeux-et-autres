function commencerJeu() {

    if(document.querySelector("#num-myst").textContent === ""){
        alert("Veuillez renseigner le nombre maximum !")
    }
    else {
        document.querySelector("#presentation").style.display = "none";
        document.querySelector("#jeu").style.display = "block"

        let numMyst = parseFloat(document.querySelector("#num-myst").textContent);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  


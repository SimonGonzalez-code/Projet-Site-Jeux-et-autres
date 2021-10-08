function ajout1() {
    if(document.querySelector("#operateur").textContent === ""){
        document.querySelector("#nbr1").textContent +="1";
    }
    else{
        document.querySelector("#nbr2").textContent +="1";
    }
}

function ajout2() {
    if(document.querySelector("#operateur").textContent === ""){
        document.querySelector("#nbr1").textContent +="2";
    }
    else{
        document.querySelector("#nbr2").textContent +="2";
    }
}

function ajout3() {
    if(document.querySelector("#operateur").textContent === ""){
        document.querySelector("#nbr1").textContent +="3";
    }
    else{
        document.querySelector("#nbr2").textContent +="3";
    }
}

function ajout4() {
    if(document.querySelector("#operateur").textContent === ""){
        document.querySelector("#nbr1").textContent +="4";
    }
    else{
        document.querySelector("#nbr2").textContent +="4";
    }
}

function ajout5() {
    if(document.querySelector("#operateur").textContent === ""){
        document.querySelector("#nbr1").textContent +="5";
    }
    else{
        document.querySelector("#nbr2").textContent +="5";
    }
}

function ajout6() {
    if(document.querySelector("#operateur").textContent === ""){
        document.querySelector("#nbr1").textContent +="6";
    }
    else{
        document.querySelector("#nbr2").textContent +="6";
    }
}

function ajout7() {
    if(document.querySelector("#operateur").textContent === ""){
        document.querySelector("#nbr1").textContent +="7";
    }
    else{
        document.querySelector("#nbr2").textContent +="7";
    }
}

function ajout8() {
    if(document.querySelector("#operateur").textContent === ""){
        document.querySelector("#nbr1").textContent +="8";
    }
    else{
        document.querySelector("#nbr2").textContent +="8";
    }
}

function ajout9() {
    if(document.querySelector("#operateur").textContent === ""){
        document.querySelector("#nbr1").textContent +="9";
    }
    else{
        document.querySelector("#nbr2").textContent +="9";
    }
}

function ajout0() {
    if(document.querySelector("#operateur").textContent === ""){
        document.querySelector("#nbr1").textContent +="0";
    }
    else{
        document.querySelector("#nbr2").textContent +="0";
    }
}

function ajoutPlus() {
    document.querySelector("#operateur").textContent = "+";
}

function ajoutMoins() {
    document.querySelector("#operateur").textContent = "-";
}

function ajoutFois() {
    document.querySelector("#operateur").textContent = "*";
}

function ajoutDiv() {
    document.querySelector("#operateur").textContent = "/";
}

function calcul() {

    let nbr1 = parseFloat(document.querySelector("#nbr1").textContent);
    let nbr2 = parseFloat(document.querySelector("#nbr2").textContent);

    if(document.querySelector("#operateur").textContent === "+"){
        document.querySelector("#result").textContent = nbr1 + nbr2;
    }
    else if(document.querySelector("#operateur").textContent === "-"){
        document.querySelector("#result").textContent = nbr1 - nbr2;
    }
    else if(document.querySelector("#operateur").textContent === "*"){
        document.querySelector("#result").textContent = nbr1 * nbr2;
    }
    else if(document.querySelector("#operateur").textContent === "/"){
        document.querySelector("#result").textContent = nbr1 / nbr2;
    }
}

function clearNumber() {
    document.querySelector("#nbr1").textContent = " ";
    document.querySelector("#nbr2").textContent = "";
    document.querySelector("#operateur").textContent = "";
    document.querySelector("#result").textContent = "";
}
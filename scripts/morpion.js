let tour = 1;
let win = false;

function ajoutcase1() {

    if(document.querySelector("#case1").textContent === "" && win === false) {
        if(tour%2===0){
            document.querySelector("#case1").textContent = "O";
        }
        else{
            document.querySelector("#case1").textContent = "X";
        }

        tour++;

        verificationVictoire();
    }
}

function ajoutcase2() {

    if(document.querySelector("#case2").textContent === "" && win === false) {
        if(tour%2===0){
            document.querySelector("#case2").textContent = "O";
        }
        else{
            document.querySelector("#case2").textContent = "X";
        }

        tour++;

        verificationVictoire();
    }
}

function ajoutcase3() {

    if(document.querySelector("#case3").textContent === "" && win === false) {
        if(tour%2===0){
            document.querySelector("#case3").textContent = "O";
        }
        else{
            document.querySelector("#case3").textContent = "X";
        }

        tour++;

        verificationVictoire();
    }
}

function ajoutcase4() {

    if(document.querySelector("#case4").textContent === "" && win === false) {
        if(tour%2===0){
            document.querySelector("#case4").textContent = "O";
        }
        else{
            document.querySelector("#case4").textContent = "X";
        }

        tour++;

        verificationVictoire();
    }
}

function ajoutcase5() {

    if(document.querySelector("#case5").textContent === "" && win === false) {
        if(tour%2===0){
            document.querySelector("#case5").textContent = "O";
        }
        else{
            document.querySelector("#case5").textContent = "X";
        }

        tour++;

        verificationVictoire();
    }
}

function ajoutcase6() {

    if(document.querySelector("#case6").textContent === "" && win === false) {
        if(tour%2===0){
            document.querySelector("#case6").textContent = "O";
        }
        else{
            document.querySelector("#case6").textContent = "X";
        }

        tour++;

        verificationVictoire();
    }
}

function ajoutcase7() {

    if(document.querySelector("#case7").textContent === "" && win === false) {
        if(tour%2===0){
            document.querySelector("#case7").textContent = "O";
        }
        else{
            document.querySelector("#case7").textContent = "X";
        }

        tour++;

        verificationVictoire();
    }
}

function ajoutcase8() {

    if(document.querySelector("#case8").textContent === "" && win === false) {
        if(tour%2===0){
            document.querySelector("#case8").textContent = "O";
        }
        else{
            document.querySelector("#case8").textContent = "X";
        }

        tour++;

        verificationVictoire();
    }
}

function ajoutcase9() {

    if(document.querySelector("#case9").textContent === "" && win === false) {
        if(tour%2===0){
            document.querySelector("#case9").textContent = "O";
        }
        else{
            document.querySelector("#case9").textContent = "X";
        }

        tour++;

        verificationVictoire();
    }
}

function verificationVictoire(){
    //CONDITION VICTOIRE HORIZONTALE
    if(document.querySelector("#case7").textContent === document.querySelector("#case8").textContent && document.querySelector("#case8").textContent === document.querySelector("#case9").textContent && document.querySelector("#case7").textContent != ""){
        victoire();
    }

    if(document.querySelector("#case4").textContent === document.querySelector("#case5").textContent && document.querySelector("#case5").textContent === document.querySelector("#case6").textContent && document.querySelector("#case4").textContent != ""){
        victoire();
    }

    if(document.querySelector("#case1").textContent === document.querySelector("#case2").textContent && document.querySelector("#case2").textContent === document.querySelector("#case3").textContent && document.querySelector("#case1").textContent != "" ){
        victoire();
    }

    //CONDITION VICTOIRE VERTICALE
    if(document.querySelector("#case7").textContent === document.querySelector("#case4").textContent && document.querySelector("#case4").textContent === document.querySelector("#case1").textContent && document.querySelector("#case7").textContent != ""){
        victoire();
    }

    if(document.querySelector("#case8").textContent === document.querySelector("#case5").textContent && document.querySelector("#case5").textContent === document.querySelector("#case2").textContent && document.querySelector("#case8").textContent != ""){
        victoire();
    }

    if(document.querySelector("#case9").textContent === document.querySelector("#case6").textContent && document.querySelector("#case6").textContent === document.querySelector("#case3").textContent && document.querySelector("#case9").textContent != ""){
        victoire();
    }

    //CONDITION VICTOIRE DIAGONALE
    if(document.querySelector("#case7").textContent === document.querySelector("#case5").textContent && document.querySelector("#case5").textContent === document.querySelector("#case3").textContent && document.querySelector("#case7").textContent != ""){
        victoire();
    }

    if(document.querySelector("#case1").textContent === document.querySelector("#case5").textContent && document.querySelector("#case5").textContent === document.querySelector("#case9").textContent && document.querySelector("#case1").textContent != ""){
        victoire();
    }

    // SI EGALITE
    if(tour === 10 && win === false){
        egalite();
    }
}

function victoire(){
    document.querySelector("#danse-victoire").style.display = "block";
    win = true;
}

function egalite(){
    document.querySelector("#baby-bored").style.display = "block";
}
function changementImage() {
    let temp = document.querySelector("#img1").src;

    document.querySelector("#img1").src = document.querySelector("#img3").src;
    document.querySelector("#img3").src = document.querySelector("#img4").src;
    document.querySelector("#img4").src = document.querySelector("#img2").src;
    document.querySelector("#img2").src = temp;

}
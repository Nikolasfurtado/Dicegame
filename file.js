function compara() {
    var n1 = Math.floor(((Math.random() * 6) + 1));
    var n2 = Math.floor(((Math.random() * 6) + 1));
    var h1 = document.getElementById("title");
    document.querySelector(".img1").setAttribute("src", "images/dice" + n1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + n2 + ".png");
    if (n1 > n2) {
        h1.innerText = ("🏁Player 1 Wins!");
    } else if (n1 < n2) {
        h1.innerText = ("Player 2 Wins!🏁");
    } else {
        h1.innerText = ("🤔Draw🤔 ");
    }

}
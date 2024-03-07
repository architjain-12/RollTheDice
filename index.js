let imgList = document.querySelectorAll("img");

imgList.forEach((x) => {
    x.setAttribute("src", `/images/dice${Math.floor((Math.random() * 6) + 1)}.png`);
});

function shuffle() {
    imgList.forEach((x) => {
        x.setAttribute("src", `/images/dice${Math.floor((Math.random() * 6) + 1)}.png`);
    });
}
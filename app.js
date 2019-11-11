homeScreen = document.querySelector(".homeScreen");
viewNum = document.querySelector(".viewNum");
plusBtn = document.querySelector(".plusBtn");
minusBtn = document.querySelector(".minusBtn");
startBtn = document.querySelector(".startBtn");
gameScreen = document.querySelector(".gameScreen");
inputName = document.querySelector(".inputName");
inputContents = document.querySelector(".inputContents");

var num = 2;

function gameSet() {
    homeScreen.classList.add("hideEffect");
    gameScreen.classList.remove("hideEffect");
    makeInput(inputName);
    makeInput(gameScreen);


    function makeInput (inputEle) {
        for (var i = 0; i < num; i++) {
            var input = document.createElement("input");
            input.classList.add("inputSet");
            inputEle.appendChild(input);
        }
    }
}

function numMinus() {
    if (num > 2) {
        num--;
        viewNum.innerText = num;
    } else {
        alert("최소 인원은 2명 입니다.");
    }
}
function numPlus() {
    if (num < 10) {
        num++
        viewNum.innerText = num;
    } else {
        alert("최대 인원은 10명을 넘을 수 없습니다.");
    }
}

function init() {
plusBtn.addEventListener("click", numPlus);
minusBtn.addEventListener("click", numMinus);
startBtn.addEventListener("click", gameSet);
}
init();
var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeBtn = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;
reset();
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

for(var i=0; i < modeBtn.length;i++){
    modeBtn[i].addEventListener("click", function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        modeBtn[2].classList.remove("selected");
        this.classList.add("selected");
        // this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        var mode = this.textContent;
        if (this.textContent === "Easy"){
            numSquares = 3;
        } else if (this.textContent === "Hard"){
            numSquares = 6;
        }else{
            numSquares = 12;
        }
        reset();
    });
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
};

function pickColor(){
    var random = Math.floor(Math.random() * numSquares);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //loop through to get rendom color
    for(var i = 0; i < num;i++){
        //push random color to array and push to array
        arr.push(getRandomColor());
    }
    //return data
    return arr;
}

function getRandomColor(){
    var random;
    //get red color
    var red = Math.floor(Math.random() * 256);
    //get green color
    var green = Math.floor(Math.random() * 256);
    //get blue color
    var blue = Math.floor(Math.random() * 256);

    random = "rgb(" + red + ", " + green + ", " + blue + ")";
    return random;
}

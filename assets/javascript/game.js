const reducer= (accumulator, currentValue) => accumulator + currentValue;
var gem1
var gem2
var gem3
var gem4
var target= (Math.floor(((Math.random() * 120)+19)));
var win= 0;
var loss= 0;
var cnumb= [0];
var cnumber= 0;

$(document).ready(function(){

function reStartGame(){
    cnumb=[];
    target= "";
    gem1= "";
    gem2= "";
    gem3= "";
    gem4= "";
    cnumber= 0;
    $("#targetnumber, #currentnumber").empty();
    startGame();
}

function startGame(){
    cnumb= [0,0];
    $(".currentnumber").text(cnumber= cnumb.reduce(reducer)); 
    target= (Math.floor(((Math.random() * 120)+19)));
    $(".targetnumber").text(target);
    gem1= Math.floor(((Math.random() * 12)+3));
    gem2= Math.floor(((Math.random() * 12)+6));
    gem3= Math.floor(((Math.random() * 12)+9));
    gem4= parseInt(Math.floor(((Math.random() * 12)+1)));
    cnumber= 0;
    $(".winbox").text(win);
    $(".lossbox").text(loss);
    console.log(gem1, gem2, gem3, gem4);
    console.log(target);
    console.log(cnumber);
}
startGame();
$(".winbox").text(win);
$(".lossbox").text(loss);


$("#gem1").on("click", function (){
    cnumb.push(+ gem1)
    $(".currentnumber").text(cnumber= cnumb.reduce(reducer));
    winCondition();
})
$("#gem2").on("click", function (){
    cnumb.push(+ gem2)
    $(".currentnumber").text(cnumber= cnumb.reduce(reducer));
    winCondition();
})
$("#gem3").on("click", function (){
    cnumb.push(+ gem3)
    $(".currentnumber").text(cnumber= cnumb.reduce(reducer));
    winCondition();
})
$("#gem4").on("click", function (){
    cnumb.push(+ gem4);
    $(".currentnumber").text(cnumber= cnumb.reduce(reducer));
    winCondition();
})

winCondition();


function winCondition(){
    if (cnumber < target){
    } else if (cnumber>target){
        console.log("OHNO");
        loss++;
        reStartGame();
    } else if (cnumber === target){
        win++;
        reStartGame();
        console.log("IT matches!");
}}

$("#tryagain").on("click", function (){
    reStartGame();
    startGame();
    winCondition();
})

})
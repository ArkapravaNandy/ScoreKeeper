var bPlayer1=document.getElementById("bPlayer1");
var bPlayer2=document.getElementById("bPlayer2");
var resetButton=document.getElementById("bReset");
var setmaxScore=document.querySelector("#maxScore");
//var setMaxScore=document.getElementById("getMaxScore");
var p1Display=document.querySelector("#score1");
var p2Display=document.querySelector("#score2");
var p1Name=document.querySelector("#player1");
var p2Name=document.querySelector("#player2");
p1Name.addEventListener("change", function(){
    bPlayer1.textContent=p1Name.value;

})
p2Name.addEventListener("change",function(){
    bPlayer2.textContent=p2Name.value;

})

maxScore=5;
var player1Score=0;
var player2Score=0;
bPlayer1.addEventListener("click", increasePlayer1Score);
bPlayer2.addEventListener("click", increasePlayer2Score);
resetButton.addEventListener("click", resetScores);
setmaxScore.addEventListener("change", function(){
    maxScore=Number(setmaxScore.value);
    document.querySelector("strong").textContent="Max Score set to "+maxScore;
    resetScores();
});



function increasePlayer1Score(){
    if(player1Score<=maxScore && player2Score<maxScore){
        if(player1Score==maxScore){
            p1Display.classList.add("winner");
            //p2Display.classList.add("loser");
            alert(p1Name.value+" won the game!");
        }else{
            player1Score++;
        p1Display.textContent=player1Score;
        
        }
        
    }
    
    //console.log(player1Score);
    
}
function increasePlayer2Score(){
    if(player1Score<maxScore && player2Score<=maxScore){
        if(player2Score==maxScore){
            p2Display.classList.add("winner");
            //p1Display.classList.add("loser");
            alert(p2Name.value+" won the game!");
        }else{
            player2Score++;
            p2Display.textContent=player2Score;
    
        }
        }
    
}
function resetScores(){
    player1Score=0;
    player2Score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    //if(player1Score==maxScore)
        p1Display.classList.remove("winner");
    //else if(player2Score==maxScore)
        p2Display.classList.remove("winner");    
}

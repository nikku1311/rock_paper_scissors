let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const cmpScorepara=document.querySelector("#comp-score");
let genCompChoice=()=>
{
    const options=["rock","paper","scissors"];
    const rdmidx=Math.floor(Math.random()*3);
    return options[rdmidx];
};
const drawGame=()=>
{
    console.log("Game was draw");
    msg.innerText="Game was draw. Play again.";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,cmpChoice)=>
{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win");
        msg.innerText=`You win! Your ${userChoice} beats ${cmpChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        console.log("you lose");
        cmpScorepara.innerText=compScore;
        msg.innerText=`You Lose. ${cmpChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
let playgame=(userChoice)=>
{
    console.log("userchoice = ",userChoice);
    const cmpChoice=genCompChoice();
    console.log("computer choice = ",cmpChoice);
    if(userChoice==cmpChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock")
        {
            userWin=cmpChoice==="paper"?false:true;
        }
        else if(userChoice=="paper")
        {
            userWin=cmpChoice==="scissors"?false:true;
        }
        else{
            userWin=cmpChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice,cmpChoice);
    }
};
choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
        let userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});
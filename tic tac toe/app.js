let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let msg=document.querySelector(".msg");
let msg1=document.querySelector("#msg");
let turnO=true;
const winpat=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
const resetGame = () => {
    turnO=true;
    enabledboxes();
    msg.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        console.log("box was clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disabledboxes = () => {
    for(let box of boxes) {
        box.disabled=true;
    }
};
const enabledboxes = () => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner = (winner) =>
{
msg1.innerText=`Congratulations, Winner is ${winner}`;
msg.classList.remove("hide");
disabledboxes();
};
const checkwinner = () => {
    for(let pattern of winpat) {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                showWinner(pos1);
                return true;
            }
        }

    }
};
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
let boxes = document.querySelectorAll(".btn");
let rst = document.querySelector(".rsb");
let win = document.querySelector("#winner");
let newb = document.querySelector(".newb");




let turn0 = true;
let count = 0;
let gameover = false;

const winCases = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonals
  [0, 4, 8],
  [2, 4, 6]
];

const disableboxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const resetgame = () =>{
    turn0 = true;
    enableboxes();
    win.innerText = "";
    count = 0;
    gameover = false;

}

boxes.forEach((btn) => {
    btn.addEventListener("click",()=>{
         if (gameover) return;

        if(turn0){
            btn.innerText = "O";
            turn0=false;
            
        }else{
            btn.innerText = "X";
            turn0=true;
        }
        btn.disabled = true;
        count++;

        checkwinner();
        
        if(count == 9 && !gameover){
            win.innerText = "there is no winner";
            gameover = true;
        }
    })
    
});

const checkwinner = () => {
    for(position of winCases){
        ps1val = boxes[position[0]].innerText;
        ps2val = boxes[position[1]].innerText;
        ps3val = boxes[position[2]].innerText;

        if(ps1val != "" && ps2val != "" && ps3val != ""){
            if(ps1val === ps2val && ps2val === ps3val){
            console.log("Winner " + ps1val);
            win.innerText = "congratulations! Winner is " + ps1val;
            disableboxes();
            gameover = true;
        }
        }
    }
        
    
}
rst.addEventListener("click",resetgame);
newb.addEventListener("click",resetgame);

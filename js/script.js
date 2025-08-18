import Calculator from "./basicArithmetic.js";

const calc=new Calculator ()
let firstNumber =null;
let operator = '';
let current = '';
const result=document.getElementById("result")

document.querySelectorAll(".num").forEach(btn=>{
    btn.addEventListener("click",()=>{
        current+=btn.innerText;
        result.value=current
    })
})

document.querySelectorAll(".op").forEach(btn => {
    btn.addEventListener("click", () => {
        if (current === "") return;
        firstNumber = parseFloat(current);
        operator = btn.innerText;
        current = "";          
           
    });
});




const equal=document.getElementById("equal")

equal.addEventListener("click",()=>{
    console.log("firstNumber:", firstNumber);
    console.log("current:", current);
    console.log("operator:", operator);
    if(firstNumber === null || current === '')return;
    let secondNum=parseFloat(current)
    let res=calc.calculate(firstNumber,secondNum,operator)
result.value=res
firstNumber=null;
current=""

})

const clear=document.getElementById("clear")
clear.addEventListener("click",()=>{
    firstNumber=null
current=""
operator=""
result.value=""
})
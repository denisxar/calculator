let num1 =0;
let operatorMain ='';
let num2=0;

const add = function(a,b) {
    return a+b; 
  };
  
const subtract = function(a,b) {
      return a-b;
  };
  
const divide = function(a,b) {
    if (b==0){
        alert("Don't do that")
        return 0;
    }
    else{
      return a/b;
    }
  };
  
const multiply = function(a,b) {
      return a*b;
  };

function operate(a,operator,b){
    console.log()
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            alert("Error");
    }
}
let currentNum=0;
let skipAction;
const display = document.querySelector("#display");
const btnZero = document.querySelector("#zero");
btnZero.addEventListener("click", () => {
    if (operatorMain&&skipAction){
        display.innerHTML = "";
        skipAction=false;
    }
        display.innerHTML += "0";
        currentNum= parseFloat(display.innerHTML);
        secondPlusAction=false;
  });
const btnOne = document.querySelector("#one");
btnOne.addEventListener("click", () => {
    if (operatorMain&&skipAction){
        display.innerHTML = "";
        skipAction=false;
    }
        display.innerHTML += "1";
        currentNum= parseFloat(display.innerHTML);
        secondPlusAction=false;
  });
const btnTwo = document.querySelector("#two");
btnTwo.addEventListener("click", () => {
    if (operatorMain&&skipAction){
        display.innerHTML = "";
        skipAction=false;
    }
        display.innerHTML += "2";
        currentNum= parseFloat(display.innerHTML);
        secondPlusAction=false;
  });
const btnThree = document.querySelector("#three");
btnThree.addEventListener("click", () => {
        if (operatorMain&&skipAction){
        display.innerHTML = "";
        skipAction=false;
    }
        display.innerHTML += "3";
        currentNum= parseFloat(display.innerHTML);
        secondPlusAction=false;
  });
const btnFour = document.querySelector("#four");
btnFour.addEventListener("click", () => {
        if (operatorMain&&skipAction){
        display.innerHTML = "";
        skipAction=false;
    }
        display.innerHTML += "4";
        currentNum= parseFloat(display.innerHTML);
        secondPlusAction=false;
  });
const btnFive = document.querySelector("#five");
btnFive.addEventListener("click", () => {
        if (operatorMain&&skipAction){
        display.innerHTML = "";
        skipAction=false;
    }
        display.innerHTML += "5";
        currentNum= parseFloat(display.innerHTML);
        secondPlusAction=false;
  });
const btnSix = document.querySelector("#six");
btnSix.addEventListener("click", () => {
        if (operatorMain&&skipAction){
        display.innerHTML = "";
        skipAction=false;
    }
        display.innerHTML += "6";
        currentNum= parseFloat(display.innerHTML);
        secondPlusAction=false;
  });
const btnSeven = document.querySelector("#seven");
btnSeven.addEventListener("click", () => {
        if (operatorMain&&skipAction){
        display.innerHTML = "";
        skipAction=false;
    }
        display.innerHTML += "7";
        currentNum= parseFloat(display.innerHTML);
        secondPlusAction=false;
  });
const btnEight = document.querySelector("#eight");
btnEight.addEventListener("click", () => {
        if (operatorMain&&skipAction){
        display.innerHTML = "";
        skipAction=false;
    }
        display.innerHTML += "8";
        currentNum= parseFloat(display.innerHTML);
        secondPlusAction=false;
  });
const btnNine = document.querySelector("#nine");
btnNine.addEventListener("click", () => {
        if (operatorMain&&skipAction){
        display.innerHTML = "";
        skipAction=false;
    }
        display.innerHTML += "9";
        currentNum= parseFloat(display.innerHTML);
        secondPlusAction=false;
  });

let tempTotal=0;
let forceAction;
let secondPlusAction=false;
let secondMinusAction=false;
let secondMultiplyAction=false;
let secondDivideAction=false;
const btnPlus = document.querySelector("#plus");
btnPlus.addEventListener("click", () => {
    if (forceAction||secondPlusAction){
        operatorMain='+';
        forceAction=false;
    }
    else{
        if (operatorMain){
            tempTotal = operate(tempTotal, operatorMain, currentNum);
            display.innerHTML = tempTotal;
            operatorMain='+';
        }
        else{
            tempTotal = currentNum;
            display.innerHTML = tempTotal;
            operatorMain='+';
        }
        skipAction=true;
    }
    secondPlusAction=true;
  });
const btnMinus = document.querySelector("#minus");
btnMinus.addEventListener("click", () => {
    if (forceAction||secondMinusAction){
        operatorMain='+';
        forceAction=false;
    }
    else{
        if (operatorMain){
            tempTotal = operate(tempTotal, operatorMain, currentNum);
            display.innerHTML = tempTotal;
            operatorMain='-';
        }
        else{
            tempTotal = currentNum;
            display.innerHTML = tempTotal;
            operatorMain='-';
        }
        skipAction=true;
    }
    secondMinusAction=true;
  });
const btnMultiply = document.querySelector("#x");
btnMultiply.addEventListener("click", () => {
    if (forceAction||secondMultiplyAction){
        operatorMain='*';
        forceAction=false;
    }
    else{
        if (operatorMain){
            tempTotal = operate(tempTotal, operatorMain, currentNum);
            display.innerHTML = tempTotal;
            operatorMain='*';
        }
        else{
            tempTotal = currentNum;
            display.innerHTML = tempTotal;
            operatorMain='*';
        }
        skipAction=true;
    }
    secondMultiplyAction=true;
  });
const btnDivide = document.querySelector("#slash");
btnDivide.addEventListener("click", () => {
    if (forceAction||secondDivideAction){
        operatorMain='/';
        forceAction=false;
    }
    else{
        if (operatorMain){
            tempTotal = operate(tempTotal, operatorMain, currentNum);
            display.innerHTML = tempTotal;
            operatorMain='/';
        }
        else{
            tempTotal = currentNum;
            display.innerHTML = tempTotal;
            operatorMain='/';
        }
        skipAction=true;
    }
    secondDivideAction=true;
  });


const btnEqual = document.querySelector("#equalSign");
btnEqual.addEventListener("click", () => {
    if(operatorMain){
        display.innerHTML = "";
        tempTotal = operate(tempTotal, operatorMain, currentNum);
        display.innerHTML = tempTotal;
        operatorMain='';
        skipAction=true;
        forceAction=true;
    }
    else{
    alert( "Start entering");
    }
  });

  const btnClear = document.querySelector("#clear");
  btnClear.addEventListener("click", () => {
    currentNum = 0;
    tempTotal = 0;
    operatorMain='';
    display.innerHTML = "";
  });

  const btns = document.querySelectorAll("button");
  btns.forEach(btn => {btn.addEventListener("click", () => {
    console.log('Operator Main - '+ operatorMain);
    console.log('SkipAction - '+ skipAction);
    console.log('Temp Total - '+ tempTotal);
    console.log('Current Num - '+ currentNum);
    });
  });
//Bài Tập 2

/**
 * Input: num1, num2, num3, num4, num5
 *
 * Process: averageValue = (num1 + num2 + num3 + num4 + num5)/5
 *
 * Output: averageValue
 */

//Get element object
var _inputNum1El = document.getElementById("txtNum1");
var _inputNum2El = document.getElementById("txtNum2");
var _inputNum3El = document.getElementById("txtNum3");
var _inputNum4El = document.getElementById("txtNum4");
var _inputNum5El = document.getElementById("txtNum5");
var _resultMsgEl = document.getElementById("resultMsg");
var _num1El = document.getElementById("num1");
var _num2El = document.getElementById("num2");
var _num3El = document.getElementById("num3");
var _num4El = document.getElementById("num4");
var _num5El = document.getElementById("num5");
var _averageValueEL = document.getElementById("averageValue");

//Delegate variables
var num1, num2, num3, num4, num5;
var averageValue;

//Function caculation Salary
function calcAverage() {
  num1 = parseFloat(_inputNum1El.value);
  num2 = parseFloat(_inputNum2El.value);
  num3 = parseFloat(_inputNum3El.value);
  num4 = parseFloat(_inputNum4El.value);
  num5 = parseFloat(_inputNum5El.value);
  averageValue = (num1 + num2 + num3 + num4 + num5) / 5;
  _num1El.innerText = num1.toString();
  _num2El.innerText = num2.toString();
  _num3El.innerText = num3.toString();
  _num4El.innerText = num4.toString();
  _num5El.innerText = num5.toString();
  _averageValueEL.innerText = averageValue.toString();
  _averageValueEL.style.fontWeight = "bold";

  _resultMsgEl.style.visibility = "visible";
}

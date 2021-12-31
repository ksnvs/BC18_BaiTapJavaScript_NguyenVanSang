// Bài Tập 5

/**
 * Input: number
 *
 * Process:
 * chrNum1 = Math.floor(number/10)
 * chrNum2 = Math.floor(number%10)
 * totalResult = chrNum1 + chrNum2
 *
 * Output: totalResult
 */

//Get element object
var _inputNumberEl = document.getElementById("txtNumber");
var _resultMsgEl = document.getElementById("resultMsg");
var _chrNum1El = document.getElementById("chrNum1");
var _chrNum2El = document.getElementById("chrNum2");
var _totalResultEl = document.getElementById("totalResult");

//Delegate variables
var chrNum1;
var chrNum2;
var totalResult;

//Function caculation Total 2 characters of Number
function calcTotalOf2Chr() {
  chrNum1 = Math.floor(parseInt(_inputNumberEl.value) / 10);
  chrNum2 = parseInt(_inputNumberEl.value) % 10;
  totalResult = chrNum2 + chrNum1;
  _chrNum1El.innerText = chrNum1.toString();
  _chrNum2El.innerText = chrNum2.toString();
  _totalResultEl.innerText = totalResult.toString();
  _totalResultEl.style.fontWeight = "bold";
  _resultMsgEl.style.visibility = "visible";
}

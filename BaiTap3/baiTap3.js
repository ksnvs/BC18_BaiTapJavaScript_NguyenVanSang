//Bài Tập 3

/**
 * Input: usd
 *
 * Process: totalVND = 23500*usd
 *
 * Output: totalVND
 */

//Get element object
var _inputUsdEl = document.getElementById("txtUSD");
var _resultMsgEl = document.getElementById("resultMsg");
var _UsdEl = document.getElementById("USD");
var _totalVndEl = document.getElementById("totalVND");

//Delegate variables
var usdToVndRate = 23500;
var usd;
var totalVND;

//Function caculation USD to VND
function calcUsdToVnd() {
  usd = parseFloat(_inputUsdEl.value);
  totalVND = usdToVndRate * usd;
  _UsdEl.innerText = usd.toLocaleString("vn");
  _totalVndEl.innerText = totalVND.toLocaleString("vn");
  _totalVndEl.style.fontWeight = "bold";
  _resultMsgEl.style.visibility = "visible";
}

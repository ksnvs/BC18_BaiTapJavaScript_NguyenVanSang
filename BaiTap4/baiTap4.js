// Bài Tập 4

/**
 * Input: length, width
 *
 * Process:
 * recPerimeter = (length + width)*2
 * recArea = length*width
 *
 * Output: recPerimeter, recArea
 */

//Get element object
var _inputLengthEl = document.getElementById("txtLength");
var _inputWidthEl = document.getElementById("txtWidth");
var _resultMsgEl = document.getElementById("resultMsg");
var _recPerimeterEl = document.getElementById("recPerimeter");
var _recAreaEl = document.getElementById("recArea");

//Delegate variables
var _length;
var _width;
var recPerimeter;
var recArea;

//Function caculation Rectangle Perimeter and Area

function calcRecPerAndArea() {
  _length = parseFloat(_inputLengthEl.value);
  _width = parseFloat(_inputWidthEl.value);
  recPerimeter = (_length + _width) * 2;
  recArea = _length * _width;
  _recPerimeterEl.innerText = recPerimeter.toString();
  _recAreaEl.innerText = recArea.toString();
  _recPerimeterEl.style.fontWeight = "bold";
  _recAreaEl.style.fontWeight = "bold";
  _resultMsgEl.style.visibility = "visible";
}

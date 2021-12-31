//Bài Tập 1

/**
 * Input: workingDays ex:10
 *
 * Process: totalSalary = 100000*workingDays
 *
 * Output: totalSalary
 */

//Get element object
var _inputWorkingDaysEl = document.getElementById("txtInputWorkingDays");
var _resultMsgEl = document.getElementById("resultMsg");
var _workingDaysEl = document.getElementById("workingDays");
var _totalSalaryEl = document.getElementById("totalSalary");

//Delegate variables
var oneDaySalary = 100000;
var workingDays;
var totalSalary;

//Function caculation Salary
function calcSalary() {
  workingDays = parseFloat(_inputWorkingDaysEl.value);
  totalSalary = oneDaySalary * workingDays;
  _workingDaysEl.innerText = workingDays.toString();
  _totalSalaryEl.innerText = totalSalary.toLocaleString("vi");
  _totalSalaryEl.style.fontWeight = "bold";

  _resultMsgEl.style.visibility = "visible";
}

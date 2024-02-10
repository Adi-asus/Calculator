
function calculate(){
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;

var num3 = parseInt(num1);
var num4 = parseInt(num2); 
var ans = num3+num4;
var answer = document.getElementById("ans");
answer.innerHTML = ans;
console.log(ans);
}
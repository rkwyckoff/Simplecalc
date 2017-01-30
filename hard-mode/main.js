


var textBox1 = document.getElementById("value-one");
var textBox2 = document.getElementById("value-two");
var results = document.getElementById("answer")

function add () {
  var num1 = Number(textBox1.value);
  var num2 = Number(textBox2.value);
  console.log(num1 + num2);
  var answer = num1 + num2;
  results.innerHTML = answer;
}
calculateButton.addEventListener('click', add);

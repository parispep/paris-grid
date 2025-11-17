alert("Welcome to my third simple Calculator Project!");

function calculate() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("please enter valid numbers!")
    return;
  }


  let operation = document.getElementById("operation").value;
  let result;



  if (operation === "add") {
    result = num1 + num2;

  } else if (operation === "subtract") {
    result = num1 - num2;

  } else if (operation === "multiply") {
    result = num1 * num2;

  } else if (operation === "divide") {
    if (num2 === 0) {
      result = "cannot divide by zeros";
    } else {
      result = num1 / num2;
    }
  }

  document.getElementById('result').innerText = "Result: " + result;

}

document.getElementById("calculateBtn").addEventListener('click', calculate);
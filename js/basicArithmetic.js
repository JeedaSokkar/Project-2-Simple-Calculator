function addition(x = 0, y = 0) {
  let sum = x + y;

  return sum;
}
function subtraction(x = 0, y = 0) {

  return x - y;
}

function multiplication(x = 1, y = 1) {
  let mult = x * y;
  return mult;
}
function division(x = 1, y = 1) {
    try {
        if (y === 0) {
            throw new Error("Division by zero is not allowed!");
        }
        return x / y;
    } catch (e) {
        console.log(e.message);
        alert(e.message);
    }
}


export class Calculator {
  calculate(x, y, operation) {
    switch (operation) {
      case "+":
        return addition(x, y);
      case "-":
        return subtraction(x, y);
      case "*":
        return multiplication(x, y);
      case "/":
        return division(x, y);
      default:
        alert("Invalid operation!");
        return null;
    }
  }
}
export default Calculator

document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");
  let currentInput = "";
  let firstOperand = null;
  let operator = null;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      if (!isNaN(value) || value === ".") { // Verifica se é um número ou um ponto decimal
        currentInput += value;
        display.textContent = currentInput;
      } else if (value === "C") {
        currentInput = "";
        firstOperand = null;
        operator = null;
        display.textContent = "0";
      } else if (value === "=") {
        if (firstOperand !== null && operator !== null && currentInput !== "") {
          const secondOperand = parseFloat(currentInput);
          let result = 0;

          switch (operator) {
            case "+":
              result = firstOperand + secondOperand;
              break;
            case "-":
              result = firstOperand - secondOperand;
              break;
            case "×":
              result = firstOperand * secondOperand;
              break;
            case "÷":
              result = firstOperand / secondOperand;
              break;
          }

          display.textContent = result;
          currentInput = result.toString(); // Atualiza a entrada atual com o resultado
          firstOperand = null;
          operator = null;
        }
      } else {
        // Operadores (+, -, ×, ÷)
        if (currentInput !== "") {
          firstOperand = parseFloat(currentInput);
          operator = value;
          currentInput = "";
        }
      }
    });
  });
});

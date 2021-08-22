const calculatorDisplay = document.getElementById("number-display")
const calculatorBtns = document.querySelectorAll(".calculator-btn")

const calculator = new StatefulCalculator()

for(let btn of calculatorBtns) {
  btn.addEventListener("click", () => {
    calculator.pushButton(btn.textContent)
    calculatorDisplay.textContent = calculator.displayOutput()
  })
}

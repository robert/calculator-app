const calculatorDisplay = document.getElementById("number-display")
const numBtns = document.querySelectorAll(".num-btn")
const operatorBtns = document.querySelectorAll(".operator-btn")
const deleteBtn = document.getElementById("delete-btn")
const resetBtn = document.getElementById("reset-btn")
const equalsBtn = document.getElementById("equals-btn")


class Calculator { // Create calculator class

    constructor(){
        this.displayValue = ""
        this.operation = [] // Create empty array to store operation in
    }

    appendInput(number) {
        this.displayValue += number //Display number entered on screen
    }

    getOperation(operator) {
        if(this.displayValue !== "" && this.displayValue !== ".") { //check if user has entered a valid number
            this.operation.push(this.displayValue) // Push number entered to operation array
            this.operation.push(operator) // Push operator entered to opreation array
            this.clearInput() // Clear calculator screen
        }
    }

    clearInput() {
        this.displayValue = ""
    }

    delete() {
        if(this.displayValue !== "") {
            this.displayValue = this.displayValue.substring(0, this.displayValue.length -1)
        }
    }

    resetAll() {
        this.displayValue = ""
        this.operation = []
    }

    performOperation() {
        this.operation.push(this.displayValue) // Get last value entered
        answer = parseFloat(this.operation[0]) // Set answer to equal first number in operation array

        if(this.operation.length >= 3) {
            this.clearInput()
            for(let i =0; i< this.operation.length; i++) { // Loop through the operation array looking for operators
                switch (this.operation[i]) {
                case "+":
                    answer = answer + parseFloat(this.operation[i+1]) // Set answer to equal current
                    break                                                      // value plus next number in array
                case "-":
                    answer = answer - parseFloat(this.operation[i+1])
                    break
                case "x":
                    answer = answer * parseFloat(this.operation[i+1])
                    break
                case "/":
                    answer = answer / parseFloat(this.operation[i+1])
                    break
                }
            }
            this.displayValue = answer  // Display answer once for loop has finished
            this.operation = [] // set operation array back to and empty array
        }
    }
}

const calculator = new Calculator()

for(let btn of numBtns) { // Add event listner to each number btn
    btn.addEventListener("click", () => {
        calculator.appendInput(btn.textContent) // Display btns text content when clicked
        calculatorDisplay.textContent = calculator.displayValue
        console.log(calculatorDisplay.textContent)
        console.log(calculator.displayValue)
    })
}

for(let btn of operatorBtns) { // Add event listner to each operator btn
    btn.addEventListener("click", () => {
        calculator.getOperation(btn.textContent) // Run calculators get operation function when clicked
        calculatorDisplay.textContent = calculator.displayValue
    })
}

deleteBtn.addEventListener("click", () => {
    calculator.delete()
    calculatorDisplay.textContent = calculator.displayValue
})

resetBtn.addEventListener("click", (e) => {
    calculator.resetAll()
    calculatorDisplay.textContent = calculator.displayValue
})

equalsBtn.addEventListener("click", () => {
    calculator.performOperation()
    calculatorDisplay.textContent = calculator.displayValue
})

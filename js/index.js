const calculatorDisplay = document.getElementById("number-display")
const numBtns = document.querySelectorAll(".num-btn")
const operatorBtns = document.querySelectorAll(".operator-btn")
const deleteBtn = document.getElementById("delete-btn")
const resetBtn = document.getElementById("reset-btn")
const equalsBtn = document.getElementById("equals-btn")


class Calculator { // Create calculator class
    constructor(calculatorDisplay){
        this.calculatorDisplay = calculatorDisplay
        this.operation = [] // Create empty array to store operation in
        this.answer = 0
    }

    displayInput(number) {
        this.calculatorDisplay.textContent += number //Display number entered on screen
    }

    getOperation(operator) { 
        if(this.calculatorDisplay.textContent !== "" && this.calculatorDisplay.textContent !== ".") { //check if user has entered a valid number
            this.operation.push(this.calculatorDisplay.textContent) // Push number entered to operation array
            this.operation.push(operator) // Push operator entered to opreation array
            this.clearInput() // Clear calculator screen
        }return
    }

    clearInput() {
        this.calculatorDisplay.textContent = "" 
    }

    delete() {
        if(this.calculatorDisplay.textContent !== "") {
            this.subStr = this.calculatorDisplay.textContent // Create variable with calculators current value
            this.subStr = this.subStr.substring(0, this.subStr.length -1) // Remove last char from string
            this.calculatorDisplay.textContent = this.subStr // Display new value
        }return
        
    }

    resetAll() {
        this.calculatorDisplay.textContent = ""
        this.operation = []
    }


    preformOperation() {
        this.operation.push(this.calculatorDisplay.textContent) // Get last value entered
        this.answer = parseFloat(this.operation[0]) // Set answer to equal first number in operation array

        if(this.operation.length >= 3) {
            this.clearInput()
            for(let i =0; i< this.operation.length; i++) { // Loop through the operation array looking for operators
                switch (this.operation[i]) {
                case "+":
                    this.answer = this.answer + parseFloat(this.operation[i+1]) // Set answer to equal current 
                    break                                                      // value plus next number in array
                case "-":
                    this.answer = this.answer - parseFloat(this.operation[i+1])
                    break
                case "x":
                    this.answer = this.answer * parseFloat(this.operation[i+1])
                    break
                case "/":
                    this.answer = this.answer / parseFloat(this.operation[i+1])
                    break
            }
            }
            this.calculatorDisplay.textContent = this.answer  // Display answer once for loop has finished            
            this.operation = [] // set operation array back to and empty array
        }return
    }
}

const calculator = new Calculator(calculatorDisplay) 

for(let btn of numBtns) { // Add event listner to each number btn 
    btn.addEventListener("click", () => {
        calculator.displayInput(btn.textContent) // Display btns text content when clicked
    } )
}

for(let btn of operatorBtns) { // Add event listner to each operator btn 
    btn.addEventListener("click", () => {
        calculator.getOperation(btn.textContent) // Run calculators get operation function when clicked
    })
}

deleteBtn.addEventListener("click", () => { 
    calculator.delete()
})

resetBtn.addEventListener("click", (e) => { 
    calculator.resetAll()
    

})

equalsBtn.addEventListener("click", () => {
    calculator.preformOperation()
})
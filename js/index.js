const calculatorDisplay = document.getElementById("number-display")
const numBtns = document.querySelectorAll(".num-btn")
const operatorBtns = document.querySelectorAll(".operator-btn")
const deleteBtn = document.getElementById("delete-btn")
const resetBtn = document.getElementById("reset-btn")
const equalsBtn = document.getElementById("equals-btn")


class Calculator {
    constructor(calculatorDisplay){
        this.calculatorDisplay = calculatorDisplay
        this.operation = []
        this.answer = 0
    }

    displayInput(number) {
        this.calculatorDisplay.textContent += number
    }

    getOperation(operator) {
        if(this.calculatorDisplay.textContent !== "") {
            this.operation.push(this.calculatorDisplay.textContent)
            this.clearInput()
            this.operation.push(operator)
        }return
    }

    clearInput() {
        this.calculatorDisplay.textContent = ""
    }

    delete() {
        if(this.calculatorDisplay.textContent !== "") {
            this.subStr = this.calculatorDisplay.textContent
            this.subStr = this.subStr.substring(0, this.subStr.length -1)
            this.subStr = this.subStr.substring(0, this.subStr.length -1)
            this.calculatorDisplay.textContent = this.subStr
        }return
        
    }

    resetAll() {
        this.calculatorDisplay.textContent = ""
        this.operation = []
    }

    preformOperation() {
        this.operation.push(this.calculatorDisplay.textContent)
        this.answer = parseFloat(this.operation[0])
        // console.log(this.operation)
        this.clearInput()


        for(let i =0; i< this.operation.length; i++) {
            switch (this.operation[i]) {
            case "+":
                let num = parseFloat(this.operation[i+1])
                this.answer = this.answer + num
                console.log(this.answer)
            }
        }
    }
}


const calculator = new Calculator(calculatorDisplay)

for(let btn of numBtns) {
    btn.addEventListener("click", () => {
        calculator.displayInput(btn.textContent)
    } )
}

for(let btn of operatorBtns) {
    btn.addEventListener("click", () => {
        calculator.getOperation(btn.textContent)
    
        // calculator.getOperator(btn.textContent)
    })
}


deleteBtn.addEventListener("click", () => {
    calculator.delete()
})

resetBtn.addEventListener("click", () => {
    calculator.resetAll()
})

equalsBtn.addEventListener("click", () => {
    calculator.preformOperation()
})

x = 2.0
y = 3.3

console.log(x+y)








// let operation = []




// function clearDisplay() {
//     calculatorDisplay.textContent = ""
// }

// function getOperation() {
//     numbers.push(calculatorDisplay.textContent)
// }



class CalculationState {

  constructor() {
    this.operand1Btns = []
    this.operand2Btns = []
    this.operator = null
  }

  // Not sure CalculationState should be responsible for this. Prob not
  calculatable() {
    return this.operand1Btns.length > 0 && this.operand2Btns.length > 0 && this.operator
  }

  calculate() {
    const op1 = btnsToNumber(this.operand1Btns)
    const op2 = btnsToNumber(this.operand2Btns)

    switch (this.operator) {
      case "+":
        return op1 + op2
      case "-":
        return op1 - op2
      case "x":
        return op1 * op2
      case "/":
        return op1 / op2
      default:
        throw `Unrecognized operator: ${this.operator}. This should never happen`
    }
  }

  reset() {
    this.operand1Btns = []
    this.operand2Btns = []
    this.operator = null
  }
}

class LazyCalculator {
  constructor() {
    this.buttonPresses = []
  }

  pushButton(button) {
    this.buttonPresses.push(button)
  }

  // Can add optimizations like throw out everything before the last CANCEL
  displayOutput() {
    let state = new CalculationState()

    this.buttonPresses.forEach((btn) => {
      switch(btnType(btn)) {
        case "OPERATOR":
          if (state.calculatable()) {
            let res = state.calculate()
            state.reset()
            state.operand1Btns = numberToBtns(res)
            state.operator = btn
          } else {
            state.operator = btn
          }
          break

        case "NUMBER":
          // This could be `state.waitingForOperand2` but I don't think that would make anythign clearer
          if (state.operator) {
            state.operand2Btns.push(btn)
          } else {
            state.operand1Btns.push(btn)
          }
          break

        case "DOT":
          if (state.operator) {
            if (!state.operand2Btns.include(".")) {
              state.operand2Btns.push(".")
            }
          } else {
            if (!state.operand1Btns.include(".")) {
              state.operand1Btns.push(".")
            }
          }
          break

        case "EQUALS":
          // This could be a method on `state`. Not sure, best to leave state as simple for 
          // now. Could get more awkward in the future
          if (state.operator) {
            if (state.operand2Btns.length > 0) {
              let res = state.calculate()
              state.reset()
              state.operand1Btns = numberToBtns(res)
            }
          }
          break

        case "CANCEL":
          state.reset()
          break

        default:
          throw `Unrecognized btnType: ${btn} This should never happen`
      }
    })

    if (state.operator) {
      return state.operand2Btns.join("")
    } else {
      return state.operand1Btns.join("")
    }
  }
}

// TODO: figure out interface between rest of program - can they just pass us strings?
function btnType(btn) {
  if (["x", "/", "-", "+"].includes(btn)) {
    return "OPERATOR"
  } else if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(btn)) {
    return "NUMBER"
  } else if (btn == ".") {
    return "DOT"
  } else if (btn == "=") {
    return "EQUALS"
  } else if (btn == "C") {
    return "CANCEL"
  } else {
    throw `Unrecognized button type: ${btn} This should never happen`
  }
}


// What are the different representations of something we need?
// Interesting tension between number and string and in progress number
function numberToBtns(num) {
  return num.toString().split("")
}

function btnsToNumber(btns) {
  return parseFloat(btns.join(""))
}

c = new LazyCalculator()
c.pushButton("-")
c.pushButton("1")
c.pushButton("+")
c.pushButton("2")
c.pushButton("=")
c.pushButton("+")
c.pushButton("3")
c.pushButton("=")
console.log(c.displayOutput())

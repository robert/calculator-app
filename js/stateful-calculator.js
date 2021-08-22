class CalculationState {

  constructor() {
    this.operand1Btns = []
    this.operand2Btns = []
    this.operator = null
  }

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

class StatefulCalculator {
  constructor() {
    this.buttonPresses = []
    this.state = new CalculationState()
  }

  // We still have the option of calculating here or when output is requested.
  // Think I prefer being eager for simplicity. We have options though, depending
  // on requirements and usage patterns.
  pushButton(btn) {
    switch(btnType(btn)) {
      case "OPERATOR":
        if (this.state.calculatable()) {
          let res = this.state.calculate()
          this.state.reset()
          this.state.operand1Btns = numberToBtns(res)
          this.state.operator = btn
        } else {
          this.state.operator = btn
        }
        break

      case "NUMBER":
        // This could be `state.waitingForOperand2` but I don't think that would make anythign clearer
        if (this.state.operator) {
          this.state.operand2Btns.push(btn)
        } else {
          this.state.operand1Btns.push(btn)
        }
        break

      case "DOT":
        if (this.state.operator) {
          if (!this.state.operand2Btns.include(".")) {
            this.state.operand2Btns.push(".")
          }
        } else {
          if (!this.state.operand1Btns.include(".")) {
            this.state.operand1Btns.push(".")
          }
        }
        break

      case "EQUALS":
        // This could be a method on `state`. Not sure, best to leave state as simple for 
        // now. Could get more awkward in the future
        if (this.state.operator) {
          if (this.state.operand2Btns.length > 0) {
            let res = this.state.calculate()
            this.state.reset()
            this.state.operand1Btns = numberToBtns(res)
          }
        }
        break

      case "CANCEL":
        this.state.reset()
        break

      default:
        throw `Unrecognized btnType: ${btn} This should never happen`
    }
  }

  // Can add optimizations like throw out everything before the last CANCEL
  displayOutput() {
    if (this.state.operator) {
      return this.state.operand2Btns.join("")
    } else {
      return this.state.operand1Btns.join("")
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

var Calculator = /** @class */ (function () {
    function Calculator() {
        this.currentInput = '';
        this.previousInput = '';
        this.operator = null;
    }
    Calculator.prototype.appendNumber = function (number) {
        if (this.currentInput === '0' && number !== '.') {
            this.currentInput = number;
        }
        else if (number === '.' && this.currentInput.indexOf('.') === -1) {
            this.currentInput += number;
        }
        else {
            this.currentInput += number;
        }
        this.updateDisplay();
    };
    Calculator.prototype.updateDisplay = function () {
        var display = document.getElementById('display');
        display.value = this.currentInput;
    };
    Calculator.prototype.clear = function () {
        this.currentInput = '';
        this.operator = null;
        this.previousInput = '';
        this.updateDisplay();
    };
    Calculator.prototype.compute = function () {
        var result;
        var no1 = parseFloat(this.previousInput);
        var no2 = parseFloat(this.currentInput);
        if (isNaN(no1) || isNaN(no2))
            return;
        switch (this.operator) {
            case '*':
                result = no1 * no2;
                break;
            case '+':
                result = no1 + no2;
                break;
            case '-':
                result = no1 - no2;
                break;
            case '/':
                result = no1 / no2;
                break;
            default:
                return;
        }
        this.currentInput = result.toString();
        this.previousInput = '';
        this.operator = null;
        this.updateDisplay();
    };
    Calculator.prototype.chooseOperator = function (operator) {
        if (this.currentInput === '')
            return;
        if (this.previousInput !== '')
            this.compute();
        this.operator = operator;
        this.previousInput = this.currentInput;
        this.currentInput = '';
    };
    return Calculator;
}());
var calci = new Calculator();
document.getElementById('buttons').addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('number')) {
        calci.appendNumber(target.innerText);
    }
    else if (target.classList.contains('operator')) {
        calci.chooseOperator(target.innerText);
    }
    else if (target.classList.contains('clear')) {
        calci.clear();
    }
    else {
        calci.compute();
    }
});

type Operator = '+' | '-' | '*' | '/';

class Calculator{
    private currentInput:string = '';
    private previousInput:string = '';
    private operator: Operator | null = null;

    public appendNumber(number:string){
        if(this.currentInput === '0' && number !== '.'){
            this.currentInput=number;            
        }
        else if(number === '.' && this.currentInput.indexOf('.') === -1){
            this.currentInput+=number;
        }
        else{
            this.currentInput+=number;
        }
        this.updateDisplay();
    }

    public updateDisplay():void{
        let display = document.getElementById('display') as HTMLInputElement;
        display.value = this.currentInput;
    }

    public clear(){
        this.currentInput = '';
        this.operator = null;
        this.previousInput = '';
        this.updateDisplay();
    }

    public compute(){
        let result:number;
        const no1 = parseFloat(this.previousInput);
        const no2 = parseFloat(this.currentInput);
        if(isNaN(no1) || isNaN(no2)) return;

        switch(this.operator){
            case '*':
                result = no1*no2;
                break;
            case '+':
                result = no1+no2;
                break;
            case '-':
                result = no1-no2;
                break;
            case '/':
                result = no1/no2;
                break;
            default:
                return;
        }   

        this.currentInput = result.toString();
        this.previousInput = '';
        this.operator = null;
        this.updateDisplay();
    }

    public  chooseOperator(operator:Operator){
        if(this.currentInput === '') return;
        if(this.previousInput !== '') this.compute();
        this.operator = operator;
        this.previousInput = this.currentInput;
        this.currentInput = '';
    }
}

const calci = new Calculator();
document.getElementById('buttons')!.addEventListener('click',(event)=>{
    const target = event.target as HTMLElement;

    if(target.classList.contains('number')){
        calci.appendNumber(target.innerText);
    }
    else if(target.classList.contains('operator')){
        calci.chooseOperator(target.innerText as Operator);
    }else if(target.classList.contains('clear')){
        calci.clear();
    }else{
        calci.compute();
    }

})
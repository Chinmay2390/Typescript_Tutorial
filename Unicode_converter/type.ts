function val(value:string):string{
    return `Unicode : U+${value.charCodeAt(0).toString(16).toUpperCase()}`
}


const btn = document.getElementById("convert") as HTMLButtonElement;
const textpara = document.getElementById("output") as HTMLTextAreaElement;
const inputEle = document.getElementById("ip") as HTMLInputElement;

btn.addEventListener("click",()=>{
    const inputValue = inputEle.value;
    const result = val(inputValue);
    textpara.textContent = result;
});

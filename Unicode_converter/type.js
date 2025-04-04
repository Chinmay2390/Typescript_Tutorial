function val(value) {
    return "Unicode : U+".concat(value.charCodeAt(0).toString(16).toUpperCase());
}
var btn = document.getElementById("convert");
var textpara = document.getElementById("output");
var inputEle = document.getElementById("ip");
btn.addEventListener("click", function () {
    var inputValue = inputEle.value;
    var result = val(inputValue);
    textpara.textContent = result;
});

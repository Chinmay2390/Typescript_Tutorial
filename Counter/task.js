// const counter = document.getElementById('counter') as HTMLDivElement;
// const incrementBtn = document.getElementById('increment') as HTMLButtonElement;
// const decrementBtn = document.getElementById('decrement') as HTMLButtonElement;
// const resetBtn = document.getElementById('reset') as HTMLButtonElement;
// let count = 0;
// function updateCounter(){
//     counter.textContent = count.toString();
// }
// incrementBtn.addEventListener("click",function () {
//     count++;
//     updateCounter();
// });
// decrementBtn.addEventListener("click",function () {
//     if(count>0){
//         count--;
//         updateCounter();
//     }
// });
// incrementBtn.addEventListener("click",function () {
//     count = 0;
//     updateCounter();
// });
var counter = document.getElementById('counter');
var incrementBtn = document.getElementById('increment');
var decrementBtn = document.getElementById('decrement');
var resetBtn = document.getElementById('reset');
var count = 0;
function updateCounter() {
    counter.textContent = count.toString();
}
incrementBtn.addEventListener('click', function () {
    count++;
    updateCounter();
});
decrementBtn.addEventListener('click', function () {
    if (count > 0) {
        count--;
        updateCounter();
    }
});
resetBtn.addEventListener('click', function () {
    count = 0;
    updateCounter();
});

// compares adjacent elements and sorts the array 
// O(n) O(n*n);

// function bubble(arr:number[]):number[]{
//     let len = arr.length;

//     for(let i = 0;i<len-1;i++){
//         for(let j = 0;j<len-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 // swap
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//             }
//         }
//     }

//     return arr;
// }

// let arr:number[] = [5,4,3,1,0];
// console.log(bubble(arr));
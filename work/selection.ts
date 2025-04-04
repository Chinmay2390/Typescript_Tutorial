function selection(arr:number[]):number[]{

    let len =  arr.length;

    for(let i = 0;i<len-1;i++){
        for(let j = i+1;j<len;j++){
            if(arr[i]>arr[j]){
                // swap
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
        }
    }
    return arr;
}
let arr : number[] = [5,4,2,3,1];
console.log(selection(arr));
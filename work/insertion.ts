// think like there are 2 arrays and insert element in the array at correct position  using insertion sort

function insertion(arr:number[]):number[]{
    let len  = arr.length;

    for(let i = 1;i<len;i++){
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }   

        arr[j+1] = key;
    }

    return arr;
}


let insert: number[] = [5,4,3,2,1];

console.log(insertion(insert));
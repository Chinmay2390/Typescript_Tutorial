function selection(arr) {
    var _a;
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                // swap
                _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
            }
        }
    }
    return arr;
}
var arr = [5, 4, 2, 3, 1];
console.log(selection(arr));

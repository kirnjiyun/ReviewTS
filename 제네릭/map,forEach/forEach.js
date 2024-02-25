var arr2 = [1, 2, 3];
arr2.forEach(function (it) { return console.log(it); });
// 출력 : 1, 2, 3
function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

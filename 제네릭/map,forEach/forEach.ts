const arr2 = [1, 2, 3];

arr2.forEach((it) => console.log(it));
// 출력 : 1, 2, 3
function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

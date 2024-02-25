{
    var arr = [1, 2, 3];
    var newArr = arr.map(function (it) { return it * 2; });
    console.log(newArr);
    // function map(
    //     arr: unknown[],
    //     callback: (item: unknown) => unknown
    // ): unknown[] {}
    // function map<T>(arr: T[], callback: (item: T) => T): T[] {}
    function map(arr, callback) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            result.push(callback(arr[i]));
        }
        return result;
    }
    var 어레이 = [10, 2, 450];
    map(어레이, function (it) { return it * 2; });
    console.log(map(어레이, function (it) { return it * 2; }));
}
// 콜백함수가 모든 배열 요소를 String 타입으로 변환하도록 수정했습니다. 이러면 오류가 발생합니다. 첫번째 인수로 arr을 전달했을 때 타입 변수 T에는 number 타입이 할당되었기 때문에 콜백 함수의 반환값 타입도 number 타입이 되어야 하기 때문입니다.
// 그런데 map 메서드는 이렇게 원본 배열 타입과 다른 타입의 배열로도 변환할 수 있어야 합니다. 따라서 타입 변수를 하나 더 추가해 다음과 같이 수정합니다.
{
    function map2(arr, callback) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            result.push(callback(arr[i]));
        }
        return result;
    }
    var 어레이 = [10, 2, 450];
    console.log(map2(어레이, function (it) { return it.toString(); }));
}

{
    function returnFirstValue<T>(data: [T, ...unknown[]]) {
        return data[0];
    }

    let str = returnFirstValue([1, "hello", "mynameis"]);
    // number
}
// 위 사례에서 만약 반환값의 타입을 배열의 첫번째 요소의 타입이 되도록 하려면 다음과 같이 튜플 타입과 나머지 파라미터를 이용하면 됩니다.

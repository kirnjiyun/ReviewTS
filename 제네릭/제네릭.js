/*
 * 제네릭 함수는 두루두루 모든 타입의 값을 다 적용할 수 있는 그런 범용적인 함수이다 정도로 이해할 수 있습니다.
 */
{
    function func1(value) {
        return value;
    }
    var num_1 = func(10);
}
//T에 어떤 타입이 할당될 지는 함수가 호출될 때 결정됩니다. func(10) 처럼 Number 타입의 값을 인수로 전달하면 매개변수 value에 Number 타입의 값이 저장되면서 T가 Number 타입으로 추론됩니다. 이때 T가 Number 타입으로 추론됩니다. 그럼 이때의 func 함수의 반환값 타입또한 Number 타입이 됩니다
{
    //직접 명시도 가능
    function func2(value) {
        return value;
    }
    var arr = func([1, 2, 3]);
}

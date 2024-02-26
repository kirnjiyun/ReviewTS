{
    function func0(value: any) {
        return value;
    }

    let num = func(10);
    // any 타입

    let str = func("string");
    // any 타입
}
/**
 * num에는 분명 Number 타입의 값 10이 저장되어 있을 것이 분명합니다. 그러나 any 타입으로 추론되어 버렸기 때문에 toUpperCase 등의 String 타입의 메서드를 사용해도 타입스크립트가 오류를 감지하지 못합니다. 이 코드는 결국 실제로 실행하면 런타임 오류를 발생시키는 아주 위험한 상태가 됩니다.
 * 따라서 num에 10이 저장될 것이 분명한데도 이 값을 사용하려면 다음과 같이 비 효율적으로 타입 좁히기를 이용해야 합니다.
 */
{
    function func(value: unknown) {
        return value;
    }

    let num = func(10);
    // unknown 타입

    let str = func("string");
    // unknown 타입

    if (typeof num === "number") {
        num.toFixed();
    }
}
//이렇게 비효율적이니까 제네릭 함수를 쓰자

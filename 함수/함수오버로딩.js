/**
 * 함수 오버로딩
 * 같은 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 일단 모든 매개변수는 넘버타입
 * -> Ver1. 매개변수가 1개일 때에는 매개변수에 20을 곱한 값을 출력
 * -> Ver2. 매개변수가 3개일 때에는 모든 매개변수를 더한 값을 출력
 */
{
    //위 코드는 func 함수는 매개변수를 1개 받는 버전과 3개 받는 2개의 버전이 있다고 알리는 것 과 같습니다.
    // 실제 구현부 -> 구현 시그니쳐
    function func(a, b, c) {
        if (typeof b === "number" && typeof c === "number") {
            console.log(a + b + c);
        }
        else {
            console.log(a * 20);
        }
    }
    func(1); // ✅ 버전 1 - 오버로드 시그니쳐
    // func(1, 2); // ❌
    func(1, 2, 3); // ✅ 버전 3 - 오버로드 시그니쳐
    // 구현 시그니쳐의 매개변수 타입은 모든 오버로드 시그니쳐와 호환되도록 만들어야 합니다. 따라서 위 코드에서는 매개변수 b와 c를 선택적 매개변수로 만들어 매개변수를 하나만 받는 첫번째 오버로드 시그니쳐와도 호환되도록 만들어 주었습니다.
}

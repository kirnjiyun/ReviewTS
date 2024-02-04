{
    /**함수 타입 표현식
다음과 같이 함수 타입을 타입 별칭과 함께 별도로 정의할 수 있습니다. 이를 함수 타입 표현식(Function Type Expression)이라고 부릅니다. */
    type Add = (a: number, b: number) => number;

    const add: Add = (a, b) => a + b;

    const minus: Add = function (a, b) {
        return a - b;
    };
}
{
    type Operation = (a: number, b: number) => number;

    const add: Operation = (a, b) => a + b;
    const sub: Operation = (a, b) => a - b;
    const multiply: Operation = (a, b) => a * b;
    const divide: Operation = (a, b) => a / b;
}
{
    /*
    호출 시그니쳐(Call Signature)는 함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식입니다.
    */

    type Operation2 = {
        (a: number, b: number): number;
    };

    const add2: Operation2 = (a, b) => a + b;
    const sub2: Operation2 = (a, b) => a - b;
    const multiply2: Operation2 = (a, b) => a * b;
    const divide2: Operation2 = (a, b) => a / b;
}

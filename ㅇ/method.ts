//메서드 오버로딩
interface Person {
    readonly name: string;
    age?: number;
    sayHi: () => void;
    // sayHi: (a: number, b: number) => void;  ❌
}
// 함수 타입 표현식으로 메서드의 타입을 정의하면 메서드의 오버로딩 구현이 불가능합니다.
interface Student {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number): void;
    sayHi(a: number, b: number): void;
}
// 호출 시그니처를 이용해 메서드의 타입을 정의하면 오버로딩 구현이 가능합니다.
interface Func2 {
    (a: number): string;
    b: boolean;
}

const func: Func2 = (a) => "hello";
func.b = true;

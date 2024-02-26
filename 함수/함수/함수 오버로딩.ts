{
    /**
     * 함수 오버로딩
     * 하나의 함수를 매개변수의 개수나 타입에 따라
     * 여러가지 버전으로 만드는 문법
     * 하나의 함수 func
     * 모든 매개변수의 타입 number
     * 어떤 버전이 있는지 먼저 알려줘야해
     */
    function add1(a: number, b: number): number;
    function add1(a: string, b: string): string;

    function add1(a: number | string, b: number | string): number | string {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        } else if (typeof a === "string" && typeof b === "string") {
            return a.concat(b);
        } else {
            throw new Error("Invalid types for addition");
        }
    }
    console.log(add1(1, 2));
    console.log(add1("14", "00"));
    console.log(add1("Hello", "World"));
    // console.log(add1(1));
    // console.log(add1(1, 2, 3));
    // console.log(add1(true, false));
}
//오버로드 시그니처
function greet(name: string): string;
function greet(name: string, age: number): string;

// 구현 시그니처
function greet(name: string, age?: number): string {
    if (age !== undefined) {
        return `안녕하세요, 제 이름은 ${name}이고, 나이는 ${age}살입니다.`;
    } else {
        return `안녕하세요, 제 이름은 ${name}입니다.`;
    }
}

console.log(greet("김지윤")); // "안녕하세요, 제 이름은 김지윤입니다."
console.log(greet("김지윤", 3)); // "안녕하세요, 제 이름은 김지윤이고, 나이는 3살입니다."
// console.log(greet());

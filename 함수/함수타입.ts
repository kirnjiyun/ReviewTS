// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명
function func(a, b) {
    return a + b;
}

function func2(a: number, b: number): number {
    return a + b;
}

const add = (a: number, b: number): number => a + b;
const add2 = (a: number, b: number) => a + b;
function introduce(name = "이정환") {
    console.log(`name : ${name}`);
}
function introduce2(name: string = "이정환") {
    console.log(`name : ${name}`);
}
function introduce345(name = "이정환", tall?: number) {
    console.log(`name : ${name}`);
    console.log(`tall : ${tall}`);
}

introduce345("김지윤", 156);

introduce345();

function introduce2334534(name = "이정환", tall?: number) {
    console.log(`name : ${name}`);
    if (typeof tall === "number") {
        console.log(`tall : ${tall + 10}`);
    }
}
function getSum(...rest) {
    let sum = 0;
    rest.forEach((n) => (sum += n));
    return sum;
}
getSum(1, 2, 3, 4, 5, 67, 5783, 234, 1123);
{
    //길이 고정하고싶으면 튜플 타입 사용
    function getSum2(...rest: [number, number, number]) {
        let sum = 0;
        rest.forEach((n) => (sum += n));
        return sum;
    }

    getSum(1, 2, 3); // ✅
    getSum(1, 2, 3, 4); // ❌
}

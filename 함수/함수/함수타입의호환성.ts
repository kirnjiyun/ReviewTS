/*
*함수 타입의 호환성이란 특정 함수 타입을 다른 함수 타입으로 괜찮은지 판단하는 것을 의미합니다.
다음 2가지 기준으로 함수 타입의 호환성을 판단하게 됩니다.
- 두 함수의 반환값 타입이 호환되는가?
- 두 함수의 매개변수의 타입이 호환되는가?
*/
{
    type A = () => number;
    type B = () => 10;

    let a: A = () => 10;
    let b: B = () => 10;

    a = b; // ✅
}
{
    //매개변수 개수 같을때
    type C = (value: number) => void;
    type D = (value: 10) => void;

    let c: C = (value) => {};
    let d: D = (value) => {};

    d = c;
    // 이는 반환값 타입과 반대됩니다. 마치 다운캐스팅을 허용하는 것 같아 보입니다.
    type Animal = {
        name: string;
    };

    type Dog = {
        name: string;
        color: string;
    };

    let animalFunc = (animal: Animal) => {
        console.log(animal.name);
    };

    let dogFunc = (dog: Dog) => {
        console.log(dog.name);
        console.log(dog.color);
    };

    animalFunc = dogFunc; // ❌
    dogFunc = animalFunc; // ✅
}
{
    //매개변수 개수 다를때
    type Func1 = (a: number, b: number) => void;
    type Func2 = (a: number) => void;

    let func1: Func1 = (a, b) => {};
    let func2: Func2 = (a) => {};

    func1 = func2; // ✅
}

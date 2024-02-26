/*
*함수 타입의 호환성이란 특정 함수 타입을 다른 함수 타입으로 괜찮은지 판단하는 것을 의미합니다.
다음 2가지 기준으로 함수 타입의 호환성을 판단하게 됩니다.
- 두 함수의 반환값 타입이 호환되는가?
- 두 함수의 매개변수의 타입이 호환되는가?
*/
{
    var a = function () { return 10; };
    var b = function () { return 10; };
    a = b; // ✅
}
{
    var c = function (value) { };
    var d = function (value) { };
    d = c;
    var animalFunc = function (animal) {
        console.log(animal.name);
    };
    var dogFunc = function (dog) {
        console.log(dog.name);
        console.log(dog.color);
    };
    animalFunc = dogFunc; // ❌
    dogFunc = animalFunc; // ✅
}
{
    var func1 = function (a, b) { };
    var func2_1 = function (a) { };
    func1 = func2_1; // ✅
}

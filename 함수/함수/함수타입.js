// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명
function func(a, b) {
    return a + b;
}
function func2(a, b) {
    return a + b;
}
var add = function (a, b) { return a + b; };
var add2 = function (a, b) { return a + b; };
function introduce(name) {
    if (name === void 0) { name = "이정환"; }
    console.log("name : ".concat(name));
}
function introduce2(name) {
    if (name === void 0) { name = "이정환"; }
    console.log("name : ".concat(name));
}
function introduce345(name, tall) {
    if (name === void 0) { name = "이정환"; }
    console.log("name : ".concat(name));
    console.log("tall : ".concat(tall));
}
introduce345("김지윤", 156);
introduce345();
function introduce2334534(name, tall) {
    if (name === void 0) { name = "이정환"; }
    console.log("name : ".concat(name));
    if (typeof tall === "number") {
        console.log("tall : ".concat(tall + 10));
    }
}
function getSum() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var sum = 0;
    rest.forEach(function (n) { return (sum += n); });
    return sum;
}
getSum(1, 2, 3, 4, 5, 67, 5783, 234, 1123);
{
    //길이 고정하고싶으면 튜플 타입 사용
    function getSum2() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var sum = 0;
        rest.forEach(function (n) { return (sum += n); });
        return sum;
    }
    getSum(1, 2, 3); // ✅
    getSum(1, 2, 3, 4); // ❌
}

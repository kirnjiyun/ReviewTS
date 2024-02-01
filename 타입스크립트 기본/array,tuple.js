/*
배열을 저장하는 변수의 이름 뒤에 타입 주석의 시작을 의미하는 콜론(:)을 작성한 다음 배열요소타입[] 형식으로 배열 타입을 정의합니다.
*/
var numArr = [1, 2, 3];
var strArr = ["Hi", "I", "like", "you"];
var boolArr = [true, false, true]; //제네릭타입으로표현가능
var boolArr2 = [false, false, false];
var multiArr = [1, "hello"]; //유니온타입
var doubleArr = [
    [1, 2, 3],
    [4, 5],
];
/*
튜플은 길이와 타입이 고정된 배열을 의미합니다.
튜플은 결국 배열입니다. 그러므로 배열 메서드인 push나 pop을 이용해 고정된 길이를 무시하고 요소를 추가하거나 삭제할 수 있습니다.
*/
var tup1 = [1, 2];
var tup2 = [1, "hello", true];
var users = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "후아무개"],
];

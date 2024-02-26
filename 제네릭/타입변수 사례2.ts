function returnFirstVal<T>(data: T[]) {
    return data[0];
}
let num = returnFirstVal([0, 1, 2]);
let str = returnFirstVal([1, "모냐", "오잉"]);
console.log(num);
console.log(str);
/*
 *함수 매개변수 data의 타입을 T[]로 설정했기 때문에 배열이 아닌 값은 인수로 전달할 수 없게 됩니다. 배열을 인수로 전달하면 T는 배열의 요소 타입으로 할당됩니다.
 *첫번째 호출에서는 인수로 Number[] 타입의 값을 전달했으므로 이때의 T는 Number 타입으로 추론됩니다. 이때의 함수 반환값 타입은 Number 타입이 됩니다.
 *두번째 호출에서는 인수로 (String | Number)[] 타입의 값을 전달했으므로 이때의 T는 String | Number 타입으로 추론됩니다. 이때의 함수 반환값 타입은 String | Number 타입이 됩니다.
 */

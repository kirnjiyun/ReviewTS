function getLength(data) {
    return data.length;
}
getLength("123"); // ✅
getLength([1, 2, 3]); // ✅
getLength({ length: 1 }); // ✅
getLength(undefined); // ❌
getLength(null); // ❌
/*
위와 같이 T extends { length : number } 라고 정의하면 T는 이제 { length : number } 객체 타입의 서브 타입이 됩니다. 바꿔말하면 이제 T는 무조건 Number 타입의 프로퍼티 length 를 가지고 있는 타입이 되어야 한다는 것 입니다. 따라서 이렇게 extends를 이용해 타입 변수를 제한하면 아래와 같은 결과가 나타납니다.
*/

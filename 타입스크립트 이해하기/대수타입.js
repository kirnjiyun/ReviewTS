{
    /*
대수 타입에는 합집합 타입과 교집합 타입이 존재합니다. 합집합은 Union 타입, 교집합은 Intersection 타입이라고 부릅니다.
*/
    // 합집합 타입 - Union 타입
    var a = void 0;
    a = 1;
    a = "이건 문자야";
    var b = void 0;
    b = 1;
    b = "hello";
    b = true;
    var arr = [234, "공유", true];
    console.log(arr);
    var human = {
        name: "jiyun",
        age: "12",
        clothes: true,
    };
    //프로퍼티가 name만 있는건 안된다.
    // name,clothes 또는 name, age 또는 , name,age,clothes 있는건 괜츈
    var variable = void 0;
    // never 타입으로 추론된다
    console.log(typeof variable);
    var intersect = {
        name: "커플커플",
        height: 9874532,
        love: true,
        color: "pink",
    };
    //모든 프로퍼티 다 있어야함!
}

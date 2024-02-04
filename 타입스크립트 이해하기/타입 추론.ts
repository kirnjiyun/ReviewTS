{
    /*
타입스크립트는 타입이 정의되어 있지 않은 변수의 타입을 자동으로 추론합니다. 이런 기능을 “타입 추론”이라고 합니다.

*타입 추론이 가능한 상황
1. 변수 선언
2. 구조 분해 할당
3. 함수의 반환값
4. 기본값이 설정된 매개변수

*주의해야할 상황들
1. 암시적으로 any 타입으로 추론
변수에 값을 할당하면 그 다음 라인부터 any 타입이 해당 값의 타입으로 변화합니다.
2.const 상수의 추론
상수는 초기화 때 설정한 값을 변경할 수 없기 때문에 특별히 가장 좁은 타입으로 추론됩니다. 

*최적의 공통 타입
*/

    let a = 10;
    // number 타입으로 추론

    let b = "hello";
    // string 타입으로 추론

    let c = {
        id: 1,
        name: "이정환",
        profile: {
            nickname: "winterlood",
        },
        urls: ["https://winterlood.com"],
    };
    // id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론

    let { id, name, profile } = c;

    let [one, two, three] = [1, "hello", true];

    function func3() {
        return "hello";
    }
    // 반환값이 string 타입으로 추론된다

    function func2(message = "hello") {
        return "hello";
    }

    let d;
    // 암시적인 any 타입으로 추론
    // d = 10;
    // d.toFixed();

    d = "hello";
    d.toUpperCase();
    d.toFixed();
    console.log(d); // 오류...띠용 안나는디?

    const num = 10;
    // 10 Number Literal 타입으로 추론

    const str = "hello";
    // "hello" String Literal 타입으로 추론
    let arr = [1, "string"];
    // (string | number)[] 타입으로 추론
}

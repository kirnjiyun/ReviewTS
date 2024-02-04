/*
 * 타입 좁히기는 타입가드로함
  if (typeof ==='string')이런거
  instanceof Date 이건 내장 클래스
  in 은 직접 만든 타입에 써먹기
 */
{
    function func(value) {
        /* value.toFixed();
         value.toUpperCase();
        만약 value가 number 타입일거라고 기대하고 toFixed 메서드를 사용하고 싶다면 다음과 같이 조건문을 이용해 value의 타입이 number 타입임을 보장해줘야 합니다.
    */
        if (typeof value === "number") {
            console.log(value.toFixed());
        }
        else if (typeof value === "string") {
            console.log(value.toUpperCase());
        }
        // if (typeof === …) 처럼 조건문과 함께 사용해 타입을 좁히는 이런 표현들을 “타입 가드”라고 부릅니다. 정리하면 타입 가드를 이용해 타입을 좁혀 사용할 수 있습니다.
    }
}
{
    //instanceof를 이용하면 내장 클래스 타입을 보장할 수 있는 타입가드를 만들 수 있습니다.
    function func(value) {
        if (typeof value === "number") {
            console.log(value.toFixed());
        }
        else if (typeof value === "string") {
            console.log(value.toUpperCase());
        }
        else if (value instanceof Date) {
            console.log(value.getTime());
        }
    }
}
{
    function func(value) {
        if (typeof value === "number") {
            console.log(value.toFixed());
        }
        else if (typeof value === "string") {
            console.log(value.toUpperCase());
        }
        else if (value instanceof Date) {
            console.log(value.getTime());
        }
        else if (value && "age" in value) {
            console.log("".concat(value.name, "\uC740 ").concat(value.age, "\uC0B4 \uC785\uB2C8\uB2E4"));
        }
    }
    var me = "littlewords";
    func(me);
    var person = {
        name: "유닝",
        age: 1564,
    };
    func(person);
}

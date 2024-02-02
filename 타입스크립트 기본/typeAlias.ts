/*
타입 별칭은 새로운 타입을 만드는 것이 아니라, 이미 존재하는 타입을 쉽게 참조할 수 있도록 이름을 붙이는 것입니다. 
타입 별칭을 이용하면 다음과 같이 변수를 선언하듯 타입을 별도로 정의할 수 있습니다.
 */
{
    type User = {
        id: number;
        name: string;
        nickname: string;
        birth: string;
        bio: string;
        location: string;
    };

    let user: User = {
        id: 1,
        name: "이정환",
        nickname: "winterlood",
        birth: "1997.01.07",
        bio: "안녕하세요",
        location: "부천시",
    };

    let user2: User = {
        id: 2,
        name: "홍길동",
        nickname: "winterlood",
        birth: "1997.01.07",
        bio: "안녕하세요",
        location: "부천시",
    };
}
{
    //스코프가 다르면 중복 이름으로 선언해도 괜찮다.
    type User = {
        id: number;
        name: string;
        nickname: string;
        birth: string;
        bio: string;
        location: string;
    };

    function test() {
        type User = string;
    }
}
{
    type StringOrNumber = string | number; // 유니언 타입
    type MyTuple = [number, string]; // 튜플
    type JSONObject = { [key: string]: string }; // 객체
}

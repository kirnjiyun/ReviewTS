/*
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

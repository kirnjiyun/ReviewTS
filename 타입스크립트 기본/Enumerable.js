/*
열거형 타입은 자바스크립트에는 존재하지 않고 오직 타입스크립트에서만 사용할 수 있는 특별한 타입입니다.
열거형은 다음과 같이 여러개의 값을 나열하는 용도로 사용합니다.
enum은 컴파일 결과 객체가 된다 */
{
    // enum 타입
    // 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
    var Role = void 0;
    (function (Role) {
        Role[Role["ADMIN"] = 10] = "ADMIN";
        Role[Role["USER"] = 11] = "USER";
        Role[Role["GUEST"] = 12] = "GUEST";
    })(Role || (Role = {}));
    var user1 = {
        name: "이정환",
        role: Role.ADMIN, // 10
    };
    var user2 = {
        name: "홍길동",
        role: Role.USER, // 11
    };
    var user3 = {
        name: "아무개",
        role: Role.GUEST, // 12
    };
}
{
    var Role = void 0;
    (function (Role) {
        Role[Role["ADMIN"] = 0] = "ADMIN";
        Role[Role["USER"] = 1] = "USER";
        Role[Role["GUEST"] = 2] = "GUEST";
    })(Role || (Role = {}));
    var Language = void 0;
    (function (Language) {
        Language["korean"] = "ko";
        Language["english"] = "en";
    })(Language || (Language = {}));
    var user1 = {
        name: "이정환",
        role: Role.ADMIN, // 0
        language: Language.korean, // "ko"
    };
}

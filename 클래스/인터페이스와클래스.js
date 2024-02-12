/**
 * 인터페이스와 클래스
 */
var Character = /** @class */ (function () {
    function Character(name, moveSpeed, extra) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.extra = extra;
    }
    Character.prototype.move = function () {
        console.log("".concat(this.moveSpeed, " \uC18D\uB3C4\uB85C \uC774\uB3D9!"));
    };
    return Character;
}());
/*
인터페이스 CharacterInterface는 name, moveSpeed 프로퍼티와 move 메서드를 갖는 객체 타입을 정의합니다. 그런데 이 인터페이스를 클래스에서 implements 키워드와 함께 사용하면 이제부터 이 클래스가 생성하는 객체는 모두 이 인터페이스 타입을 만족하도록 클래스를 구현해야 합니다.
 */

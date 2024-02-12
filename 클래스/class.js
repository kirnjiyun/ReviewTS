var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    // 생성자
    function Employee(name, age, position) {
        // 필드
        this.name = "";
        this.age = 0;
        this.position = "";
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    Employee.prototype.work = function () {
        console.log("".concat(this.name, "\uC740 \uC77C\uD558\uACE0\uC788\uC5B4\uC694"));
    };
    return Employee;
}());
/*
타입스크립트에서는 클래스의 필드를 선언할 때 타입 주석으로 타입을 함께 정의해주어야 합니다. 그렇지 않으면 함수 매개변수와 동일하게 암시적 any 타입으로 추론되는데 엄격한 타입 검사 모드(strict 옵션이 true로 설정되어 있을 경우)일 때에는 오류가 발생하게 됩니다.
추가로 생성자에서 각 필드의 값을 초기화 하지 않을 경우 초기값도 함께 명시해주어야 합니다.추가로 생성자에서 각 필드의 값을 초기화 하지 않을 경우 초기값도 함께 명시해주어야 합니다.
 *상속
타입스크립트에서 클래스의 상속을 이용할 때 파생 클래스(확장하는 클래스)에서 생성자를 정의 했다면 반드시 super 메서드를 호출해 슈퍼 클래스(확장되는 클래스)의 생성자를 호출해야 하며, 호출 위치는 생성자의 최상단 이어야만 합니다.
 */
var ExecutiveOfficer = /** @class */ (function (_super) {
    __extends(ExecutiveOfficer, _super);
    function ExecutiveOfficer(name, age, position, officeNumber) {
        var _this = _super.call(this, name, age, position) || this;
        _this.officeNumber = officeNumber;
        return _this;
    }
    return ExecutiveOfficer;
}(Employee));

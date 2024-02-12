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
var Student = /** @class */ (function () {
    // 생성자
    function Student(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    Student.prototype.study = function () {
        console.log("".concat(this.name, "\uC740 \uC5F4\uC2EC\uD788 \uACF5\uBD80 \uD568"));
    };
    Student.prototype.introduce = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694!");
    };
    return Student;
}());
var studentA = new Student("김지윤", "A+", 349);
console.log(studentA.study());
var StudentDeveloper = /** @class */ (function (_super) {
    __extends(StudentDeveloper, _super);
    // 생성자
    function StudentDeveloper(name, grade, age, favoriteSkill) {
        var _this = _super.call(this, name, grade, age) || this;
        _this.favoriteSkill = favoriteSkill;
        return _this;
    }
    // 메서드
    StudentDeveloper.prototype.programming = function () {
        console.log("".concat(this.favoriteSkill, "\uB85C \uD504\uB85C\uADF8\uB798\uBC0D \uD568"));
    };
    return StudentDeveloper;
}(Student));

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
/*
클래스의 특정 필드나 메서드를 접근할 수 있는 범위를 설정하는 기능입니다.
public : 모든 범위에서 접근 가능
private : 클래스 내부에서만 접근 가능
proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능
*/
{
    var Employee_1 = /** @class */ (function () {
        // 생성자
        function Employee(name, age, position) {
            this.name = name;
            this.age = age;
            this.position = position;
        }
        // 메서드
        Employee.prototype.work = function () {
            console.log("일함");
        };
        return Employee;
    }());
    var employee = new Employee_1("이정환", 27, "devloper");
    employee.name = "홍길동";
    employee.age = 30;
    employee.position = "디자이너";
    console.log(employee);
}
{
    var Employee_2 = /** @class */ (function () {
        // 생성자
        function Employee(name, age, position) {
            this.name = name;
            this.age = age;
            this.position = position;
        }
        // 메서드
        Employee.prototype.work = function () {
            console.log("일함");
        };
        Employee.prototype.changename = function () {
            this.name = "지유니";
        };
        return Employee;
    }());
    var employee = new Employee_2("이정환", 27, "devloper");
    console.log(employee);
    employee.changename();
    console.log(employee);
    // employee.name = "홍길동";  ❌ 오류
}
/*
 *name 필드를 private으로 설정했으므로 클래스 외부에서는 접근이 불가합니다. 그러나 클래스 내부에서는 work 메서드 처럼 접근이 자유롭게 가능합니다. */
{
    var Employee_3 = /** @class */ (function () {
        function Employee() {
        }
        // 메서드
        Employee.prototype.work = function () {
            console.log("".concat(this.name, "\uC774 \uC77C\uD568")); // 여기서는 접근 가능
        };
        return Employee;
    }());
    var ExecutiveOfficer_1 = /** @class */ (function (_super) {
        __extends(ExecutiveOfficer, _super);
        function ExecutiveOfficer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // 메서드
        ExecutiveOfficer.prototype.func = function () {
            // this.name; // ❌ 오류
            this.age; // ✅ 가능
        };
        return ExecutiveOfficer;
    }(Employee_3));
    // const employee = new Employee("이정환", 27, "devloper");
    // employee.name = "홍길동"; // ❌ 오류
    // employee.age = 30; // ❌ 오류
    // employee.position = "디자이너";
}
/*
 * Employee 클래스를 확장(상속)하는 파생 클래스 ExecutiveOfficer를 선언한 다음 메서드 func를 만들었습니다. 이 메서드에서는 name과 age에 접근하는데 이때 name은 private으로 접근이 불가하지만 age는 protected이므로 파생 클래스에서는 접근이 가능합니다. 그러나 클래스 외부에서는 접근이 불가합니다.
 */

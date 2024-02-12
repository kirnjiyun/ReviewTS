/*
클래스의 특정 필드나 메서드를 접근할 수 있는 범위를 설정하는 기능입니다.
public : 모든 범위에서 접근 가능
private : 클래스 내부에서만 접근 가능
proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능
*/
{
    class Employee {
        // 필드
        name: string; // 자동으로 public
        age: number; // 자동으로 public
        position: string; // 자동으로 public

        // 생성자
        constructor(name: string, age: number, position: string) {
            this.name = name;
            this.age = age;
            this.position = position;
        }

        // 메서드
        work() {
            console.log("일함");
        }
    }

    const employee = new Employee("이정환", 27, "devloper");

    employee.name = "홍길동";
    employee.age = 30;
    employee.position = "디자이너";
    console.log(employee);
}
{
    class Employee {
        // 필드
        private name: string; // private 접근 제어자 설정
        age: number;
        position: string;

        // 생성자
        constructor(name: string, age: number, position: string) {
            this.name = name;
            this.age = age;
            this.position = position;
        }

        // 메서드
        work() {
            console.log("일함");
        }
        changename() {
            this.name = "지유니";
        }
    }

    const employee = new Employee("이정환", 27, "devloper");
    console.log(employee);
    employee.changename();
    console.log(employee);
    // employee.name = "홍길동";  ❌ 오류
}
/*
 *name 필드를 private으로 설정했으므로 클래스 외부에서는 접근이 불가합니다. 그러나 클래스 내부에서는 work 메서드 처럼 접근이 자유롭게 가능합니다. */
{
    class Employee {
        // 필드
        private name: string; // private 접근 제어자 설정
        protected age: number;
        public position: string;

        // 메서드
        work() {
            console.log(`${this.name}이 일함`); // 여기서는 접근 가능
        }
    }

    class ExecutiveOfficer extends Employee {
        // 메서드
        func() {
            // this.name; // ❌ 오류
            this.age; // ✅ 가능
        }
    }

    // const employee = new Employee("이정환", 27, "devloper");

    // employee.name = "홍길동"; // ❌ 오류
    // employee.age = 30; // ❌ 오류
    // employee.position = "디자이너";
}
/*
 * Employee 클래스를 확장(상속)하는 파생 클래스 ExecutiveOfficer를 선언한 다음 메서드 func를 만들었습니다. 이 메서드에서는 name과 age에 접근하는데 이때 name은 private으로 접근이 불가하지만 age는 protected이므로 파생 클래스에서는 접근이 가능합니다. 그러나 클래스 외부에서는 접근이 불가합니다.
 */

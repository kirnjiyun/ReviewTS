{
    type Admin = {
        name: string;
        kickCount: number;
    };

    type Member = {
        name: string;
        point: number;
    };

    type Guest = {
        name: string;
        visitCount: number;
    };

    type User = Admin | Member | Guest;

    function login(user: User) {
        if ("kickCount" in user) {
            // Admin
            console.log(
                `${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`
            );
        } else if ("point" in user) {
            // Member
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
        } else {
            // Guest
            console.log(
                `${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`
            );
        }
    }
}
{
    type Admin = {
        tag: "ADMIN";
        name: string;
        kickCount: number;
    };

    type Member = {
        tag: "MEMBER";
        name: string;
        point: number;
    };

    type Guest = {
        tag: "GUEST";
        name: string;
        visitCount: number;
    };
    type User = Admin | Member | Guest;

    function login2(user: User) {
        switch (user.tag) {
            case "ADMIN": {
                console.log(
                    `${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`
                );
                break;
            }
            case "MEMBER": {
                console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
                break;
            }
            case "GUEST": {
                console.log(
                    `${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`
                );
                break;
            }
        }
    }
}

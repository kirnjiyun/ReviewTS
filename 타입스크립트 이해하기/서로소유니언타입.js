{
    function login(user) {
        if ("kickCount" in user) {
            // Admin
            console.log("".concat(user.name, "\uB2D8 \uD604\uC7AC\uAE4C\uC9C0 ").concat(user.kickCount, "\uBA85 \uCD94\uBC29\uD588\uC2B5\uB2C8\uB2E4"));
        }
        else if ("point" in user) {
            // Member
            console.log("".concat(user.name, "\uB2D8 \uD604\uC7AC\uAE4C\uC9C0 ").concat(user.point, "\uBAA8\uC558\uC2B5\uB2C8\uB2E4"));
        }
        else {
            // Guest
            console.log("".concat(user.name, "\uB2D8 \uD604\uC7AC\uAE4C\uC9C0 ").concat(user.visitCount, "\uBC88 \uC624\uC168\uC2B5\uB2C8\uB2E4"));
        }
    }
}
{
    function login2(user) {
        switch (user.tag) {
            case "ADMIN": {
                console.log("".concat(user.name, "\uB2D8 \uD604\uC7AC\uAE4C\uC9C0 ").concat(user.kickCount, "\uBA85 \uCD94\uBC29\uD588\uC2B5\uB2C8\uB2E4"));
                break;
            }
            case "MEMBER": {
                console.log("".concat(user.name, "\uB2D8 \uD604\uC7AC\uAE4C\uC9C0 ").concat(user.point, "\uBAA8\uC558\uC2B5\uB2C8\uB2E4"));
                break;
            }
            case "GUEST": {
                console.log("".concat(user.name, "\uB2D8 \uD604\uC7AC\uAE4C\uC9C0 ").concat(user.visitCount, "\uBC88 \uC624\uC168\uC2B5\uB2C8\uB2E4"));
                break;
            }
        }
    }
}

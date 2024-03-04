interface User {
    id: number;
    name: string;
    age: number;
}

function fetchUser(): User {
    return {
        id: 1,
        name: "이정환",
        age: 27,
    };
}
function updateUser(user: User) {
    return {};
}
// updateUser({
//     // ❌
//     age: 25,
// });

// 나이만 수정하고 싶은데 ...
//서로 똑같은거임
type PartialUSer = {
    [key in "id" | "name" | "age"]?: User[key];
};
type PartialUserToo = {
    id?: number;
    name?: string;
    age?: number;
};

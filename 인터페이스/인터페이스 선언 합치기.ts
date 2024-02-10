/*
선언 합침
타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언할 수 없는 반면 인터페이스는 가능합니다.
*/
{
    type Person = {
        name: string;
    };

    //   type Person = { ❌
    //     age: number;
    //   };
}
{
    interface Person {
        name: string;
    }

    interface Person {
        // ✅
        age: number;
    }
    // interface Person {
    //     name: string;
    //     age: number;
    // }선언 합침(Declaration Merging)이라고 부릅니다.
    // 이렇게 동일한 프로퍼티의 타입을 다르게 정의한 상황을 ‘충돌’ 이라고 표현하며 선언 합침에서 이런 충돌은 허용되지 않습니다.
}

{
    type Person = {
        name: string;
        age: number;
    };

    // let person: Person = {};
    // person.name = "";
    // person.age = 23;
    // 변수 person은 Person 타입으로 정의 되었지만 초기화 할 때에는 빈 객체를 넣어두고 싶다고 가정하겠습니다. 그러나 타입스크립트에서는 이런 경우를 허용하지 않습니다. 빈 객체는 Person 타입이 아니므로 오류가 발생하게 됩니다.
}
{
    type Person = {
        name: string;
        age: number;
    };

    let person = {} as Person;
    person.name = "";
    person.age = 23;
}
{
    //초과 프로퍼티 검사를 피할때도 요긴하게 쓰임
    type Dog = {
        name: string;
        color: string;
    };

    let dog: Dog = {
        name: "돌돌이",
        color: "brown",
        breed: "진도",
    } as Dog;
    /*
    값 as 타입
    값이 타입의 슈퍼 타입이거나 서브타입이어야한다.
    let num3 = 10 as string; 
     */
}
{
    let num3 = 10 as unknown as string;
    //다중 단언 가능한데 되도록 쓰지말자
}
{
    let num4 = 10 as const;
    // 10 Number Literal 타입으로 단언됨
    let num5: 10 = 10;
    console.log(num4 === num5);

    let cat = {
        name: "야옹이",
        color: "yellow",
    } as const;
    // 모든 프로퍼티가 readonly를 갖도록 단언됨
}
{
    //     Non Null 단언: Non Null 단언은 지금까지 살펴본 값 as 타입 형태를 따르지 않는 단언입니다. 값 뒤에 느낌표(!) 를 붙여주면 이 값이 undefined이거나 null이 아닐것으로 단언할 수 있습니다.
    type Post = {
        title: string;
        author?: string;
    };

    let post: Post = {
        title: "게시글1",
    };

    const len: number = post.author!.length;
    console.log(typeof len);
}
{
    const value = 20;
    // let value: 20 = 20;
    // let value = 20 as const;
    function giveme20(value: 10 | 20) {
        return value;
    }
    console.log(giveme20(value));
}

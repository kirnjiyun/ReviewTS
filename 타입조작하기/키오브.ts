{
    interface Person {
        name: string;
        age: number;
        location: string; // 추가
    }

    // function getPropertyKey(person: Person, key: "name" | "age" | "location") {
    //     return person[key];
    // }
    function getPropertyKey1(person: Person, key: keyof Person) {
        return person[key];
    }

    const person: Person = {
        name: "지유니",
        age: 346,
        location: "seoul",
    };
    /*
이때 key의 타입을 “name” | “age”로 정의했는데 이렇게 정의하면 다음과 같이 Person 타입에 새로운 프로퍼티가 추가되거나 수정될 때 마다 이 타입도 계속 바꿔줘야 합니다.
*/
    console.log(Object.values(person));
    console.log(getPropertyKey1(person, "age"));
}

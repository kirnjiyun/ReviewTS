// interface Person {
//   name: string;
//   age: number;
// } | number // ❌
{
    interface Person {
        name: string;
        age: number;
    }

    // Type1은 number, string, 또는 Person 타입 중 하나를 나타내는 유니언 타입입니다.
    type Type1 = number | string | Person;

    // Type2는 불가능한 타입입니다.
    // number, string, 그리고 Person 타입을 모두 만족해야 하는데, 이는 불가능합니다.
    // 따라서 Type2는 불가능한 타입입니다.
    // type Type2 = number & string & Person;

    // 정환은 Person 타입입니다.
    const 정환: Person = {
        name: "이정환",
        age: 27,
    };
}
/*
 *인터페이스는 대부분의 상황에 타입 별칭과 동일하게 동작하지만 몇가지 차이점이 존재합니다. 타입 별칭에서는 다음과 같이 Union이나 Intersection 타입을 정의할 수 있었던 반면 인터페이스에서는 할 수 없습니다.
 따라서 인터페이스로 만든 타입을 Union 또는 Intersection으로 이용해야 한다면 다음과 같이 타입 별칭과 함께 사용하거나 타입 주석에서 직접 사용해야 합니다
 */

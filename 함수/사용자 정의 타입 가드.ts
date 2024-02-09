{
    /*
*사용자 정의 타입 가드
참 또는 거짓을 반환하는 함수를 이용해 우리 입맛대로 타입 가드를 만들 수 있도록 도와주는 타입스크립트의 문법입니다.
*/

    type Dog = {
        name: string;
        isBark: boolean;
    };

    type Cat = {
        name: string;
        isScratch: boolean;
    };

    type Animal = Dog | Cat;

    let puppy: Dog = {
        name: "pudgging",
        isBark: true,
    };

    //그런데 이렇게 in 연산자를 이용해 타입을 좁히는 방식은 좋지 않다고 이전에 살펴본 적 있습니다. 예를 들어 만약 Dog 타입의 프로퍼티가 다음과 같이 중간에 이름이 수정되거나 추가 또는 삭제될 경우에는 타입 가드가 제대로 동작하지 않을 수도 있습니다.

    // Dog 타입인지 확인하는 타입 가드
    // function isDog(animal: Animal): animal is Dog {
    //     return (animal as Dog).isBark !== undefined;
    // }

    // Cat 타입인지 확인하는 타입가드
    // function isCat(animal: Animal): animal is Cat {
    //     return (animal as Cat).isScratch !== undefined;
    // }

    // function warning(animal: Animal) {
    //     if (isDog(animal)) {
    //         console.log(animal.isBark ? "짖습니다" : "안짖어요");
    //     } else {
    //         console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    //     }
    // }

    console.log(warning(puppy));
    // isDog 함수는 매개변수로 받은 값이 Dog 타입이라면 true 아니라면 false를 반환합니다. 이때 반환값의 타입으로 animal is Dog 를 정의하면 이 함수가 true를 반환하면 조건문 내부에서는 이 값이 Dog 타입임을 보장한다는 의미가 됩니다. 따라서 warning 함수에서 isDog 함수를 호출해 매개변수의 값이 Dog 타입인지 확인하고 타입을 좁힐 수 있습니다
}

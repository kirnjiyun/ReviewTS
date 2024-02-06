{
    interface Animal {
        name: string;
        age: number;
    }

    interface Dog {
        name: string;
        age: number;
        isBark: boolean;
    }

    interface Cat {
        name: string;
        age: number;
        isScratch: boolean;
    }

    interface Chicken {
        name: string;
        age: number;
        isFly: boolean;
    }
}
{
    interface Animal {
        name: string;
        color: string;
    }

    interface Dog extends Animal {
        breed: string;
    }

    interface Cat extends Animal {
        isScratch: boolean;
    }

    interface Chicken extends Animal {
        isFly: boolean;
    }
}
//따라서 Dog, Cat, Chicken 타입은 모두 Animal 타입을 확장하는 타입이기 때문에 name, age 프로퍼티를 갖게 됩니다.
{
    interface Animal {
        name: string;
        color: string;
    }

    interface Dog extends Animal {
        name: "doldol"; // 타입 재 정의
        breed: string;
    }
}
{
    type Animal = {
        name: string;
        color: string;
    };

    interface Dog extends Animal {
        breed: string;
    }
    //타입을 인터페이스로 확장하는 것도 가능
}
{
    type Animal = {
        name: string;
        color: string;
    };

    interface Dog extends Animal {
        breed: string;
    }
    interface Cat extends Animal {
        meow: boolean;
    }
    //타입을 인터페이스로 확장하는 것도 가능
    interface DogCat extends Dog, Cat {}

    const dogCat: DogCat = {
        name: "",
        color: "",
        breed: "",
        meow: true,
    };
}

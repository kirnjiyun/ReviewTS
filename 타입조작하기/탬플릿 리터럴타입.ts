{
    type Color = "red" | "black" | "green";
    type Animal = "dog" | "cat" | "chicken";

    // type ColoredAnimal = `red-dog` | "red-cat" | "red-chicken" | "black-dog";
    type ColoredAnimal = `${Color}-${Animal}`;
    /*
     * Color와 Animal은 각각 3개의 String Literal 타입으로 이루어진 Union 타입입니다. 그리고 ColoredAnimal은 Color와 Animal을 조합해 만들 수 있는 모든 가지수의 String Literal 타입으로 이루어진 Union 타입입니다.
     * Color나 Animal 타입에 String Literal 타입이 추가되어 경우의 수가 많아질 수록 ColoredAnimal 타입에 추가해야하는 타입이 점점 많아지게 됩니다. 이럴 때 바로 템플릿 리터럴 타입을 이용하면 좋습니다.
     */
}

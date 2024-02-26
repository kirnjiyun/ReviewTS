type Dog = {
    name: string;
    isBark: boolean;
};
type Cat = {
    name: string;
    isScratch: boolean;
};
type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}

function warning(animal: Animal) {
    if (isDog(animal)) {
        console.log(animal.isBark ? "짖습니다" : "안짖어요");
    } else {
        console.log((animal as Cat).isScratch ? "할큅니다" : "안할퀴어요");
    }
}
let puppy: Dog = {
    name: "pudgging",
    isBark: true,
};
let meow: Cat = {
    name: "냥냥이",
    isScratch: false,
};

warning(puppy);
warning(meow);

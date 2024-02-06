function isDog(animal) {
    return animal.isBark !== undefined;
}
function warning(animal) {
    if (isDog(animal)) {
        console.log(animal.isBark ? "짖습니다" : "안짖어요");
    }
    else {
        console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    }
}
var puppy = {
    name: "pudgging",
    isBark: true,
};
var meow = {
    name: "냥냥이",
    isScratch: false,
};
warning(puppy);
warning(meow);

interface Kim {
    height: number;
    age?: number;
}
type Girl = {
    name: string;
    grade: number;
    love: boolean;
};
let kim: Kim = {
    height: 190,
};

let jiyun: Girl = {
    name: "지윤",
    grade: 1,
    love: true,
};
console.log(kim);
console.log(jiyun);

interface Buffet {
    readonly name: string;
    restaurant: boolean;
    sayHi?: () => void;
    sayBye?(): void;
}

let maki: Buffet = {
    name: "마키노차야",
    restaurant: true,
};
console.log(maki.name);
maki.restaurant = false;
console.log(maki);
// maki.name = "lumiere";

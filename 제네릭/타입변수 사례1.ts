function swap<T, U>(a: T, b: U) {
    return [b, a];
}
const [a, b] = swap("1", 2);

console.log(swap("1", 2));
console.log(typeof a);
console.log(typeof b);

//실제 구현부 ->구현 시그니처
function func(a, b, c) {
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    }
    else {
        console.log(a * 20);
    }
}
// func();
func(1);
// func(1, 2);
func(1, 2, 3);

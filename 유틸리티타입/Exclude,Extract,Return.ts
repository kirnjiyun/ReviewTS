{
    type A = Exclude<string | boolean, string>;
    // boolean
    type Exlcude<T, U> = T extends U ? never : T;
}
{
    type B = Extract<string | boolean, boolean>;
    // boolean
    type Extract<T, U> = T extends U ? T : never;
}
{
    type ReturnType<T extends (...args: any) => any> = T extends (
        ...agrs: any
    ) => infer R
        ? R
        : never;

    function funcA() {
        return "hello";
    }

    function funcB() {
        return 10;
    }

    type ReturnA = ReturnType<typeof funcA>;
    // string

    type ReturnB = ReturnType<typeof funcB>;
    // number
}

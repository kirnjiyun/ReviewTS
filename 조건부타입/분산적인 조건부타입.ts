{
    type StringNumberSwitch<T> = T extends number ? string : number;

    let a: StringNumberSwitch<number>;

    let b: StringNumberSwitch<string>;
    let c: StringNumberSwitch<number | string>;
    // string | number
}
/*
*당신이 말하고 있는 것은 TypeScript의 '조건부 타입 분산'에 대한 내용입니다. 조건부 타입에서 타입 변수에 Union 타입을 할당하게 되면, 해당 Union 타입 내부의 각각의 타입에 대해 조건부 타입이 적용되어 분산됩니다.

예를 들어, StringNumberSwitch<number | string>이라는 조건부 타입에서 'number | string'은 Union 타입이므로 이를 분산하면 StringNumberSwitch<number>와 StringNumberSwitch<string>이 됩니다그 후에, 이 두 타입의 결과를 모아 다시 Union 타입으로 묶어서 'number | string'이라는 결과를 얻게 됩니다. 이러한 방식으로 인해, 변수 c는 string | number 타입으로 정의되게 됩니다.

*/

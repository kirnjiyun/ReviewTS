/*
인덱스 시그니쳐는 객체 타입을 유연하게 정의할 수 있도록 돕는 특수한 문법입니다.
*/
type CountryCodes = {
    Korea: string;
    UnitedState: string;
    UnitedKingdom: string;
    // (... 약 100개의 국가)
    Brazil: string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
    // (... 약 100개의 국가)
    Brazil: "bz",
};
/*
만약 이때 countryCodes에 100개의 프로퍼티(국가 코드)가 추가 되어야 한다면 타입 정의에도 각 프로퍼티를 모두 정의해주어야 하기 때문에 매우 불편할 것 입니다. */
{
    type CountryCodes = {
        [key: string]: string;
        // key가 string 타입이고 value가 string 타입인 모든 프로퍼티를 포함된다
    };

    let countryCodes: CountryCodes = {
        Korea: "ko",
        UnitedState: "us",
        UnitedKingdom: "uk",
        // (... 약 100개의 국가)
        Brazil: "bz",
    };
}
{
    type CountryNumberCodes = {
        [key: string]: number;
        Korea: number;
    };
    let countrynumbercodes: CountryNumberCodes = {
        japan: 3,
        USA: 10,
        Korea: 892,
    };
}
//인덱스 시그니처 주의할 점
// 인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 합니다
{
    type CountryNumberCodes = {
        [key: string]: number;
        // Korea: string;
    };
}

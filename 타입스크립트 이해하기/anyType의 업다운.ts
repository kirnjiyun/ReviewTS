let anyValue: any;

let num: number = anyValue; // any -> number (다운 캐스트)
let str: string = anyValue; // any -> string (다운 캐스트)
let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

anyValue = num; // number -> any (업 캐스트)
anyValue = str; // string -> any (업 캐스트)
anyValue = bool; // boolean -> any (업 캐스트)

// 이렇듯 any 타입은 모든 타입으로 다운캐스트 할 수 있으며 또 모든 타입은 any 타입으로 업 캐스트 할 수 있습니다.

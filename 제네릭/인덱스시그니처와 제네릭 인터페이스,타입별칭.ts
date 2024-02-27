interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: "value",
};

let booleanMap: Map<boolean> = {
    key: true,
};
/*
 *interface Map<V> { [key: string]: V; } 부분이 인덱스 시그니처에 해당하는데, 이는 Map 인터페이스가 문자열 키를 가지며 해당 키에 대응하는 값의 타입은 V라는 것을 나타냅니다. V는 제네릭 변수로, 다양한 타입을 받을 수 있습니다.
인덱스 시그니처는 객체의 속성 이름(키)과 그에 해당하는 값의 타입을 정의하는 방법입니다. 
 */
type Map2<V> = {
    [key: string]: V;
};

let stringMap2: Map2<string> = {
    key: "string",
};

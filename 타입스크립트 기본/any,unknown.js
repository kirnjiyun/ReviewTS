/*any 타입은 타입스크립트에서만 제공되는 특별한 타입으로 타입 검사를 받지 않는 특수한 치트키 타입입니다 */
var anyVar = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;
/*
unknown 타입의 변수는 다음과 같이 어떤 타입의 값이든 다 저장할 수 있습니다.
그러나 반대로는 안됩니다. unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없습니다.
또 unknown 타입의 값은 어떤 연산에도 참여할 수 없으며, 어떤 메서드도 사용할 수 없습니다.
정리하자면 unknown 타입은 독특하게도 변수의 타입으로 정의되면 모든 값을 할당받을 수 있게 되지만, 반대로 unknown 타입의 값은 그 어떤 타입의 변수에도 할당할 수 없고, 모든 연산에 참가할 수 없게 됩니다. 쉽게 정리하면 오직 값을 저장하는 행위밖에 할 수 없게 됩니다.
any와 unknown
이 페이지는 인프런 강의 한 입 크기로 잘라먹는 타입스크립트 의 강의 자료입니다
📄
Table Of Contents
 
chapter6.ts 에서 실습과 함께 진행합니다.
any 타입
any 타입은 타입스크립트에서만 제공되는 특별한 타입으로 타입 검사를 받지 않는 특수한 치트키 타입입니다.
예를 들어 다음과 같이 아주 범용적으로 사용되어야 하는 변수가 하나 있다고 가정합니다.
Copy
let anyVar = 10;
anyVar = "hello"; // 오류 발생!
변수 anyVar는 number 타입의 값 10으로 초기화 했지만 이후에 또 string 타입의 값 “hello”를 저장해야 한다고 가정하겠습니다.
타입스크립트에서는 변수의 타입이 변수를 초기화할 때 초기화 하는 값을 기준으로 추론하기 때문에 이렇게 하면 오류가 발생합니다.
따라서 이럴 때에는 다음과 같이 any 라는 치트키 타입을 이용하면 됩니다.
Copy
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;
이렇듯 any 타입은 어떠한 타입 검사도 받지 않기 때문에 아무 타입의 값이나 범용적으로 담아 사용할 수 있고 또 다양한 타입의 메서드도 마음대로 호출해서 사용해도 문제가 되지 않습니다.
또 any 타입의 값은 어떤 타입으로 정의된 변수던 문제 없이 다 할당할 수 있습니다. 따라서 다음과 같이 number 타입의 변수 num에 any 타입의 값 anyVar를 할당해도 문제가 발생하지 않습니다.
Copy
let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar;
any는 최대한 사용하지 마세요
우리가 아까 작성한 다음과 같은 코드를 컴파일 하거나 ts-node로 실행해보면 런타임 오류가 발생합니다.
Copy
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;
이렇듯 any 타입은 타입 검사를 받지 않는 타입이므로 모든 타입스크립트의 문법과 규칙으로부터 자유롭지만 그만큼 위험한 타입입니다.
따라서 any 타입을 많이 사용하면 많은 부분에서 타입 검사가 제대로 이루어지지 않기에 위험한 코드가 생산됩니다. 이러면 사실 타입스크립트를 사용하는 이유가 없습니다.
따라서 정말 어쩔 수 없는 경우를 제외하고는 any 타입을 사용하지 않는것을 강력히 권장합니다.
Unknown 타입
unknown 타입은 any 타입과 비슷하지만 보다 안전한 타입입니다.
unknown 타입의 변수는 다음과 같이 어떤 타입의 값이든 다 저장할 수 있습니다.
Copy
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
 
그러나 반대로는 안됩니다. unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없습니다.
Copy
let num: number = 10;
(...)

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

num = unknownVar; // 오류 !
 
또 unknown 타입의 값은 어떤 연산에도 참여할 수 없으며, 어떤 메서드도 사용할 수 없습니다.
Copy
let unknownVar: unknown;
(...)

unknownVar * 2 // 오류!
 
정리하자면 unknown 타입은 독특하게도 변수의 타입으로 정의되면 모든 값을 할당받을 수 있게 되지만, 반대로 unknown 타입의 값은 그 어떤 타입의 변수에도 할당할 수 없고, 모든 연산에 참가할 수 없게 됩니다. 쉽게 정리하면 오직 값을 저장하는 행위밖에 할 수 없게 됩니다.
만약 위와 같이 unknown 타입의 값을 number 타입의 값처럼 취급하고 곱셈 연산을 수행하게 하고 싶다면 다음과 같이 조건문을 이용해 이 값이 number 타입의 값임을 보장해줘야 합니다.
Copy
if (typeof unknownVar === "number") {
    // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}
참고로 타입스크립트에서는 위 코드처럼 조건문을 이용해 특정 값이 특정 타입임을 보장할 수 있게 되면 해당 값의 타입이 자동으로 바뀝니다. 이를 타입 좁히기라고 하며 3섹션에서 자세히 다룹니다.
따라서 특정 변수가 당장 어떤 값을 받게 될 지 모른다면 any 타입으로 정의하는 것 보단 unknown 타입을 이용하는게 훨씬 안전한 선택이 됩니다.

 */
var unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = function () { };
// num = unknownVar; // 오류 !

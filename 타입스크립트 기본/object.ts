/*
타입스크립트에서 객체 정의하는 방법
object로 정의하기
객체 리터럴 타입으로 정의하기
 */
{
    let user: object = {
        id: 1,
        name: "이정환",
    };
    // user.id;
    // console.log(user.id);
}
/*
타입스크립트의 object 타입은 단순 값이 객체임을 표현하는 것 외에는 아무런 정보도 제공하지 않는 타입이기 때문입니다. 따라서 이 타입은 객체의 프로퍼티에 대한 정보를 전혀 가지고 있지 않습니다. 그렇기 때문에 이렇게 프로퍼티에 접근하려고 하면 오류가 발생합니다.

아래는 객체 리터럴 타입
*/
{
    let user: {
        id: number;
        name: string;
    } = {
        id: 1,
        name: "이정환",
    };

    user.id;
    console.log(user.id);
}
{
    let dog: {
        name: string;
        color: string;
    } = {
        name: "돌돌이",
        color: "brown",
    };
}
/*
특수한 프로퍼티 정의하기
 */

{
    //선택적 프로퍼티
    let user: {
        id?: number;
        name: string;
    } = {
        id: 1,
        name: "이정환",
    };

    user = {
        name: "홍길동",
    };
}
{
    //읽기 전용 프로퍼티
    let user: {
        id?: number;
        readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
    } = {
        id: 1,
        name: "이정환",
    };

    // user.name='지유니';
}

{
    // let person: Person = {};
    // person.name = "";
    // person.age = 23;
    // 변수 person은 Person 타입으로 정의 되었지만 초기화 할 때에는 빈 객체를 넣어두고 싶다고 가정하겠습니다. 그러나 타입스크립트에서는 이런 경우를 허용하지 않습니다. 빈 객체는 Person 타입이 아니므로 오류가 발생하게 됩니다.
}
{
    var person = {};
    person.name = "";
    person.age = 23;
}
{
    var dog = {
        name: "돌돌이",
        color: "brown",
        breed: "진도",
    };
    /*
    값 as 타입
    값이 타입의 슈퍼 타입이거나 서브타입이어야한다.
    let num3 = 10 as string;
     */
}
{
    var num3 = 10;
    //다중 단언 가능한데 되도록 쓰지말자
}
{
    var num4 = 10;
    // 10 Number Literal 타입으로 단언됨
    var num5 = 10;
    console.log(num4 === num5);
    var cat = {
        name: "야옹이",
        color: "yellow",
    };
    // 모든 프로퍼티가 readonly를 갖도록 단언됨
}
{
    var post = {
        title: "게시글1",
    };
    var len = post.author.length;
    console.log(typeof len);
}

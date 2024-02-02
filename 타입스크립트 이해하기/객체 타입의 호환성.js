/* 객체 타입간의 호환성도 동일한 기준으로 판단합니다. 모든 객체 타입은 각각 다른 객체 타입들과 슈퍼-서브 타입 관계를 갖습니다. 따라서 업 캐스팅은 허용하고 다운 캐스팅은 허용하지 않습니다. 다음 예시와 함께 자세히 살펴보겠습니다.*/
{
    var plant = {
        name: "튤립",
        age: 1,
    };
    var marimo = {
        name: "리모",
        age: 3,
        moss: true,
    };
    plant = marimo;
    // marimo = plant;
}
//Plant 타입의 변수 plant 에 Marimo 타입의 변수 marimo를 할당하는 것은 가능합니다. 그러나 marimo 변수에 plant 변수의 값을 할당하는 것은 불가능합니다. Plant 타입이 Marimo 타입의 슈퍼타입이기 때문입니다.
//그런데 Plant 타입이 왜 Marimo 타입의 슈퍼 타입일까요? 언뜻 보면 Marimo 타입이 더 많은 프로퍼티를 정의하고 있어 슈퍼타입처럼 보일 수 있지만 그 반대입니다.
//어떤 객체가 Marimo 타입에 포함된다면 무조건 Plant 타입에도 포함됩니다. 그러나 반대로 Plant 타입에 포함되는 모든 객체가 Marimo 타입에 포함되는것은 아닙니다. 따라서 결국 Plant는 Marimo의 슈퍼타입입니다.
{
    var movie = void 0;
    var romanceMovie = {
        name: "Titanic",
        happyEnding: false,
    };
    movie = romanceMovie;
    // romanceMovie = movie;
    var anotherRomanceMovie2 = romanceMovie; //앞서 만든 변수
    console.log(anotherRomanceMovie2);
    var anotherRomanceMovie3 = {
        name: "Pride&Prejudice",
        // happyEnding: true,
    };
    // 이것은 업캐스팅에 해당되는데 왜 오류가 발생하는 걸까요?
    //결론부터 말하면 이것은 ‘초과 프로퍼티 검사’가 발동해서 그렇습니다. 초과 프로퍼티 검사란 변수를 객체 리터럴로 초기화 할 때 발동하는 타입스크립트의 특수한 기능입니다. 이 기능은 타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 객체를 변수에 할당할 수 없도록 막습니다.
    //     따라서 위 코드는 Movie 타입에 정의되지 않은 happyEnding 프로퍼티를 갖는 객체를 할당하려고 했으므로 초과 프로퍼티 검사가 실패해 오류가 발생하고 있는 것 입니다.
    //이런 초과 프로퍼티 검사는 단순히 변수를 초기화 할 때 객체 리터럴을 사용하지만 않으면 발생하지 않습니다. 따라서 다음과 같이 값을 별도의 다른 변수에 보관한 다음 변수 값을 초기화 값으로 사용하면 발생하지 않습니다.
}

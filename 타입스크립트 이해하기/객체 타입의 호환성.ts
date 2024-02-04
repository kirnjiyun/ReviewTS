/* 객체 타입간의 호환성도 동일한 기준으로 판단합니다. 모든 객체 타입은 각각 다른 객체 타입들과 슈퍼-서브 타입 관계를 갖습니다. 따라서 업 캐스팅은 허용하고 다운 캐스팅은 허용하지 않습니다. 다음 예시와 함께 자세히 살펴보겠습니다.*/
{
    type Plant = {
        name: string;
        age: number;
    };

    type Marimo = {
        name: string;
        age: number;
        moss: boolean;
    };

    let plant: Plant = {
        name: "튤립",
        age: 1,
    };

    let marimo: Marimo = {
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
    type Video = {
        name: string;
    };
    type Movie = {
        name: string;
        premiere: number;
    };

    type RomanceMovie = {
        name: string;
        premiere: number;
        happyEnding: boolean;
    };
    let video: Video = {
        name: "just a video",
    };

    let movie: Movie = {
        name: "TopGun:Maverick",
        premiere: 2022,
    };

    let romanceMovie: RomanceMovie = {
        name: "Titanic",
        premiere: 1997,
        happyEnding: false,
    };
}

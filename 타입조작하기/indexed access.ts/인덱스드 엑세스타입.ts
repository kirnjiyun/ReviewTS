/*
 *인덱스드 엑세스 타입은 인덱스를 이용해 다른 타입내의 특정 프로퍼티의 타입을 추출하는 타입입니다. 인덱스드 엑세스 타입은 객체, 배열, 튜플에 사용할 수 있기 때문에 세가지 예시를 순서대로 모두 살펴보겠습니다.
 */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}

const post: Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
        age: 30,
    },
};
//이때 대괄호 속에 들어가는 String Literal 타입인 “author” 를 인덱스 라고 부릅니다. 그래서 인덱스를 이용해 특정 타입에 접근하다고 하여 인덱스드 엑세스 타입이라 부릅니다.주의할 점은 인덱스에는 값이 아니라 타입만 들어갈 수 있습니다.
// ["author"]["id"]가능

function printAuthorInfo(author: Post["author"]) {
    console.log(`${author.id} - ${author.name}`);
}
console.log(printAuthorInfo(post.author));

interface Animal {
    name: string;
    species: string;
    description: {
        color: string[];
        diet: string;
        weight: number;
    };
}

let animal: Animal = {
    name: "푸바오",
    species: "판다",
    description: {
        color: ["검정색", "흰색"],
        diet: "채식",
        weight: 110,
    },
};
function introduceAnimal(description: Animal["description"]) {
    console.log(
        `${description.diet}이며, 몸무게는 ${description.weight}kg입니다.`
    );
}
function introduceAnimal1(description: {
    color: string[];
    diet: string;
    weight: number;
}) {
    console.log(
        `${description.diet}이며, 몸무게는 ${description.weight}kg입니다.`
    );
}
// const desciptionKey = "description";
// function introduceAnimal(description: Animal[descriptionkey]) {
//     console.log(
//         `${description.diet}이며, 몸무게는 ${description.weight}kg입니다.`
//     );
// }
introduceAnimal(animal.description);
introduceAnimal1(animal.description);
interface Animal2 {
    name: string;
    species: string;
    description: {
        color: string[];
        diet: string;
        weight: number;
        siblings: string[];
    };
}

let animal2: Animal2 = {
    name: "푸바오",
    species: "판다",
    description: {
        color: ["검정색", "흰색"],
        diet: "채식",
        weight: 110,
        siblings: ["후이바오", "루이바오"],
    },
};
function printAnimalColor(color: Animal2["description"]["color"]) {
    console.log(`이 동물은 ${color}입니다.`);
}

printAnimalColor(animal.description.color);

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];
const firstpost: PostList[number] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
        age: 27,
    },
};
//PostList[number]는 PostList 배열 타입으로부터 요소의 타입을 추출하는 인덱스드 엑세스 타입입니다. 이렇듯 배열의 요소 타입을 추출할 때에는 인덱스에 number 타입을 넣어주면 됩니다. 하나의 요소의 타입을 가져온다고 생각하면 됨
// 또 인덱스에 다음과 같이 Number Literal 타입을 넣어도 됩니다. 숫자와 관계없이 모두 Number 타입을 넣은 것과 동일하게 동작합니다.
const secondpost: PostList[0] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
        age: 27,
    },
};
//값이 아니라 넘버 리터럴 타입이다
// const num = 0 하고 [num]하면 오류가 발생한다
function printAuthorInfo2(author: PostList[number]["author"]) {
    console.log(`${author.id} - ${author.name}`);
}

type MovieList = {
    title: string;
    genre: string;
    premiere: number;
    information: {
        cast: string[];
        ott: boolean;
        cinema: boolean;
    };
}[];
const firstmovie: MovieList[number] = {
    title: "웡카",
    genre: "판타지",
    premiere: 20240131,
    information: {
        cast: ["티모시 샬라메", "휴 그랜트", "칼라 레인"],
        ott: false,
        cinema: true,
    },
};
const secondmovie: MovieList[0] = {
    title: "듄2",
    genre: "액션",
    premiere: 20240228,
    information: {
        cast: ["티모시 샬라메", "젠데이아 콜먼", "레베카 퍼거슨"],
        ott: false,
        cinema: true,
    },
};
function printCastInfo(information: MovieList[number]["information"]) {
    console.log(`이 영화에는 ${information.cast}이 출연합니다.`);
}
function printCastInfo1(cast: MovieList[number]["information"]["cast"]) {
    console.log(`이 영화에는 ${cast}이 출연합니다.`);
}

printCastInfo(firstmovie.information);
printCastInfo1(secondmovie.information.cast);

/**이 코드는 TypeScript로 작성된 영화 정보를 다루는 코드입니다.

우선, `MovieList`라는 타입을 정의하고 있습니다. `MovieList`는 배열 타입이며, 각 요소는 영화 정보를 표현하는 객체입니다. 이 객체는 `title`, `genre`, `premiere`, 그리고 `information`이라는 프로퍼티를 가지고 있습니다. `information`은 또 다른 객체로, `cast`, `ott`, `cinema`라는 세 가지 프로퍼티를 가지고 있습니다.

그 다음에는 `firstmovie`와 `secondmovie`라는 두 개의 상수를 선언하고 있습니다. 이 두 상수는 `MovieList[number]`와 `MovieList[0]` 타입을 가지고 있습니다. 이는 `MovieList` 배열의 요소인 영화 정보 객체의 타입을 나타냅니다. 즉, `firstmovie`와 `secondmovie`는 영화 정보 객체를 가지고 있습니다.

여기서 `MovieList[number]`나 `MovieList[0]`에서의 `number`나 `0`는 배열의 인덱스를 의미하는 것이 아니라, 배열의 요소의 타입을 나타내는 것입니다. 따라서 `firstmovie`와 `secondmovie`는 `MovieList`의 요소인 영화 정보 객체의 타입을 가지게 됩니다. 

이렇게 인덱스 액세스 타입을 활용하면, 복잡한 타입 구조에서 특정 부분의 타입을 정확하게 지정할 수 있습니다. 이는 코드의 가독성과 유지보수성을 높이는 데 도움이 됩니다. */

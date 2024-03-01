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
//PostList[number]는 PostList 배열 타입으로부터 요소의 타입을 추출하는 인덱스드 엑세스 타입입니다. 이렇듯 배열의 요소 타입을 추출할 때에는 인덱스에 number 타입을 넣어주면 됩니다.
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
printCastInfo(firstmovie.information);
printCastInfo(secondmovie.information);

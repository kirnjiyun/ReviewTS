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

/*
"legacyPost" 변수에 저장된 게시글은 태그나 썸네일 기능이 추가되기 이전에 만들어진 게시글이라고 가정합니다. 그런데 이 변수를 "Post" 타입으로 설정하면 "tags" 프로퍼티가 존재하기 때문에 오류가 발생하게 됩니다. 옛날에 작성된 게시글이 몇 개나 될 지도 모르기 때문에 일일이 "tags"를 추가해 줄 수도 없고 그렇다고 옛 게시글들 만을 위한 타입을 별도로 만들어 줄 수도 없는 상황입니다.

이런 경우를 해결하기 위해 "Pick<T, K>"를 사용할 수 있습니다. 다음과 같이 "Pick"을 이용하면 됩니다.

*/
{
    interface Post {
        title: string;
        tags: string[];
        content: string;
        thumbnailURL?: string;
    }
    const legacyPost: Pick<Post, "title" | "content"> = {
        title: "",
        content: "",
    };
    // 추출된 타입 : { title : string; content : string }

    type Pick<T, K extends keyof T> = {
        [key in K]: T[key];
    };
}

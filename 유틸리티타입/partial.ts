{
    interface Post {
        title: string;
        tags: string[];
        content: string;
        thumbnailURL?: string;
    }

    // const draft: Post = {
    //     // ❌ tags 프로퍼티가 없음
    //     title: "제목은 나중에 짓자...",
    //     content: "초안...",
    // };
    const draft2: Partial<Post> = {
        title: "제목 나중에 짓자",
        content: "초안...",
    };

    /*
     *다음으로는 T에 할당된 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔줘야 합니다. 기존 객체 타입을 다른 타입으로 변환하는 타입은 맵드 타입이었습니다. 따라서 맵드 타입을 이용해 다음과 같이 수정합니다.
     */
    type Partial<T> = {
        [key in keyof T]?: T[key];
    };
}

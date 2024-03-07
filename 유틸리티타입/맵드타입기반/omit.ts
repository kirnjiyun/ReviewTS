/*
Omit<T, K>
Omit<T, K>는 특정 객체 타입으로부터 특정 프로퍼티를 제거하는 유틸리티 타입입니다. 예를 들어, T가 name과 age를 가진 객체 타입이고 K가 name인 경우, 결과는 name을 제외한 객체 타입이 됩니다.

예제로는 제목이 생략된 게시글이 존재한다고 가정합니다.
*/
{
    interface Post {
        title?: string;
        tags: string[];
        content: string;
        thumbnailURL?: string;
    }

    const noTitlePost: Post = {
        content: "",
        tags: [],
        thumbnailURL: "",
    };
}
{
    interface Diet {
        고기: string;
        야채: string;
        단백질: string;
        pizza: string;
    }
    type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

    const noPizzaBMC: Omit<Diet, "pizza"> = {
        고기: "양고기",
        야채: "목이버섯",
        단백질: "초코맛 단백질 쉐이크",
    };
}

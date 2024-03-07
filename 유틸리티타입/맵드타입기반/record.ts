{
    type Thumbnail1 = {
        large: {
            url: string;
        };
        medium: {
            url: string;
        };
        small: {
            url: string;
        };
        watch: {
            url: string;
        };
    };
    type Thumbnail2 = Record<"large" | "medium" | "small", { url: string }>;
    //위 Record 타입은 K에는 “large” | “medium” |  “small”이 할당되었으므로 large, medium, small 프로퍼티가 있는 객체 타입을 정의합니다. 그리고 각 프로퍼티 value의 타입은 V에 할당한 { url : stirng } 이 됩니다.
}

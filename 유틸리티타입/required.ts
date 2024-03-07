interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

// 반드시 썸네일 프로퍼티가 존재해야 하는 게시글
const withThumbnailPost1: Post = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://...",
};
//우리가 원하는 것은 이 변수에 한정해 thumbnailURL을 필수 프로퍼티로 만들어 주고 싶습니다. 어떻게 할 수 있을까요?
const withThumbnailPost2: Required<Post> = {
    // ❌
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://...",
};

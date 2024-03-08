{
    interface Post {
        title: string;
        tags: string[];
        content: string;
        thumbnailURL?: string;
    }

    const readonlyPost: Readonly<Post> = {
        title: "보호된 게시글입니다.",
        tags: [],
        content: "",
    };

    // readonlyPost.content = "해킹당함"; // ❌
}

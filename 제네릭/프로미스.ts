interface Post {
    id: number;
    title: string;
    content: string;
}
//post라는 인터페이스 정의 -

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // 결과값 : 20
        resolve(20);
    }, 3000);
});

promise.then((response) => {
    // response는 number 타입
    console.log(response);
});

promise.catch((error) => {
    if (typeof error === "string") {
        console.log(error);
    }
});
/*
 * 그 다음에는 숫자를 resolve하는 프로미스 객체 promise를 생성하였습니다. 이 프로미스는 3초 후에 20을 결과값으로 반환(resolve)합니다.
 *이 프로미스 객체에 then 메소드를 사용하여, 프로미스가 성공적으로 완료될 경우 실행될 콜백 함수를 등록하였습니다. 이 콜백 함수는 프로미스가 resolve된 값, 즉 숫자 20을 인자로 받아 콘솔에 출력합니다.
 *또한, catch 메소드를 사용하여 프로미스가 실패(reject)할 경우 실행될 콜백 함수를 등록하였습니다. 이 콜백 함수는 오류 객체를 인자로 받아, 오류 메시지가 문자열 타입일 경우 그것을 콘솔에 출력합니다.
 */

function fetchPost(): Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 본문",
            });
        }, 3000);
    });
}
/*
 *마지막으로, fetchPost라는 함수를 정의하였습니다. 이 함수는 Post 타입의 객체를 resolve하는 프로미스를 반환합니다. 이 프로미스는 3초 후에 id, title, content 속성을 가진 객체를 결과값으로 반환합니다.
 */

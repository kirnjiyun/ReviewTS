interface ReviewEvent {
        (menu: string): string;
        (menu: string, review: number): string;
    }

    let reviewEvent: ReviewEvent = (menu: string, review?: number): string => {
        if (typeof review === "number") {
            return `손님이 ${menu}을(를) 주문하고 리뷰이벤트 ${review}번 품목을 선택하였습니다.`;
        } else {
            return `${menu}을(를) 주문하셨습니다.`;
        }
    };

    console.log(reviewEvent("불족발"));
    console.log(reviewEvent("피자", 2));

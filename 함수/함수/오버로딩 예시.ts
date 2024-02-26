type Travel = {
    (from: string, to: string, destination: string): string;
    (from: string, to: string, destination: string, hotel: string): string;
};

let travel: Travel = (
    from: string,
    to: string,
    destination: string,
    hotel?: string
): string => {
    if (typeof hotel === "string") {
        return `도착지는 ${destination} 호텔은 ${hotel}`;
    } else {
        return `여행 도착지는 ${destination}`;
    }
};

console.log(travel("10", "20", "대만"));
travel("10", "20", "대만", "멋진호텔");

interface Travel2 {
    (from: string, to: string, destination: string): string;
    (from: string, to: string, destination: string, hotel: string): string;
}

let travel2: Travel2 = (
    from: string,
    to: string,
    destination: string,
    hotel?: string
): string => {
    if (typeof hotel === "string") {
        return `도착지는 ${destination} 호텔은 ${hotel}`;
    } else {
        return `여행 도착지는 ${destination}`;
    }
};

travel2("10", "20", "일본");
travel2("10", "20", "일본", "이쁜호텔");

type FoodOrder = {
    (menu: string): string;
    (menu: string, quantity: number): string;
};

let order: FoodOrder = (menu: string, quantity?: number): string => {
    if (typeof quantity === "number") {
        return `${menu} ${quantity}개를 주문하겠습니다.`;
    } else {
        return `${menu} 먹고싶어요`;
    }
};

console.log(order("훠궈"));
console.log(order("뿌링클", 2));

{
    interface ReviewEvent {
        (menu: string): string;
        (menu: string, review: number): string;
    }

    let reviewEvent: ReviewEvent = (menu: string, review?: number): string => {
        if (typeof review === "number") {
            return `손님이 ${menu}을(를) 주문하고 리뷰이벤트 ${review}번 품목을 선택했습니다.`;
        } else {
            return `손님이 ${menu}을(를) 주문했습니다.`;
        }
    };

    console.log(reviewEvent("불족발"));
    console.log(reviewEvent("피자", 1));
}

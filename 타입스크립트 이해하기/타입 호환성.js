{
    var num1 = 10;
    var num2 = 10;
    num1 = num2;
}
{
    var num1 = 10;
    var num2 = 10;
    // num2 = num1;
    // 변수 num2는 Number Literal 타입이므로 10외의 다른 값은 절대 담을 수 없습니다.
}
/*
입스크립트에서는 이렇게 슈퍼타입의 값을 서브타입의 값으로 취급하는것을 허용하지 않습니다. 반대로는 허용합니다.
특별히 서브 타입의 값을 슈퍼 타입의 값으로 취급하는 것은 업 캐스팅 이라고 부르고 반대는 다운캐스팅이라고 부릅니다. 따라서 쉽게 정리하면 업캐스팅은 모든 상황에 가능하지만 다운 캐스팅은 대부분의 상황에 불가능하다고 할 수 있습니다.
 */

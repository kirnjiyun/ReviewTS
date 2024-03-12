import React, { useState } from "react";

interface Props {
    onClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
    // const [text, setText] = useState<string>(); //초기값 없어서
    const [text, setText] = useState("");
    //미리 정의된 이벤트 객체 타입 가져와야한다.
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    const onClickButton = () => {
        props.onClickAdd(text);
        setText("");
    };
    return (
        <div>
            <input type="text" value={text} onChange={onChangeInput} />
            <button onClick={onClickButton}>추가</button>
        </div>
    );
}

import React, { useState } from "react";
import styled from "styled-components";

export default function AddTodo({
    todoList,
    setTodoList,
    idCount,
    setIdCount,
}) {
    const [inputValue, setInputValue] = useState("");

    const onChangeInput = (event) => {
        setInputValue(event.target.value);
    };

    const onAddTodo = () => {
        setTodoList([
            ...todoList,
            { id: idCount, content: inputValue, done: false },
        ]);
        setIdCount((prevState) => prevState + 1);
    };

    return (
        <Wrapper>
            <Input
                value={inputValue}
                onChange={(event) => onChangeInput(event)}
            />
            <Button
                disabled={!inputValue}
                value={inputValue === ""}
                onClick={() => onAddTodo()}
            >
                추가
            </Button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    /* position: fixed; */
    display: flex;
    align-items: center;
    gap: 5px;
    padding-bottom: 20px;
`;

const Input = styled.input`
    padding: 0 15px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #b5c3df;
    color: #7990ca;
    outline: none;

    &:focus {
        border-width: 2px;
    }
`;

const Button = styled.button`
    padding: 3px 15px;
    border: none;
    background-color: ${({ value }) => (value ? "#939eb6" : "#7990CA")};
    color: #f6f7f9;
    cursor: pointer;
    border-radius: 3px;
`;

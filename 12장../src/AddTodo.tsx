import React, { useState } from "react";
import styled from "styled-components";

interface AddTodoProps {
    todoList: { id: number; content: string; done: boolean }[];
    setTodoList: React.Dispatch<
        React.SetStateAction<{ id: number; content: string; done: boolean }[]>
    >;
    idCount: number;
    setIdCount: React.Dispatch<React.SetStateAction<number>>;
}

const AddTodo: React.FC<AddTodoProps> = ({
    setTodoList,
    idCount,
    setIdCount,
}) => {
    const [inputValue, setInputValue] = useState("");

    const onAddTodo = () => {
        setTodoList((prevTodoList) => [
            ...prevTodoList,
            { id: idCount, content: inputValue, done: false },
        ]);
        setIdCount((prevIdCount) => prevIdCount + 1);
        setInputValue("");
    };

    return (
        <Wrapper>
            <Input
                type="text"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputValue(e.target.value)
                }
            />
            <Button
                disabled={!inputValue}
                inputValue={inputValue}
                onClick={onAddTodo}
            >
                추가
            </Button>
        </Wrapper>
    );
};

export default AddTodo;

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

const Button = styled.button<{ inputValue: string }>`
    padding: 3px 15px;
    border: none;
    background-color: ${({ inputValue }) =>
        !inputValue ? "#939eb6" : "#7990CA"};
    color: #f6f7f9;
    cursor: pointer;
    border-radius: 3px;
`;

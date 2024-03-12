import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import styled from "styled-components";

interface TodoItem {
    id: number;
    content: string;
    done: boolean;
}

export default function Todo() {
    const [idCount, setIdCount] = useState<number>(3);
    const [todoList, setTodoList] = useState<TodoItem[]>([
        { id: 0, content: "치킨 먹기", done: false },
        { id: 1, content: "피자 먹기", done: false },
        { id: 2, content: "마라탕 먹기", done: false },
    ]);

    return (
        <Container>
            <Wrapper>
                <Title>My Todolist</Title>
                <AddTodo
                    todoList={todoList}
                    setTodoList={setTodoList}
                    idCount={idCount}
                    setIdCount={setIdCount}
                />
                <TodoList todoList={todoList} setTodoList={setTodoList} />
            </Wrapper>
        </Container>
    );
}

const Wrapper = styled.div``;

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    min-height: 100vh;

    background-color: #f6f7f9;
`;

const Title = styled.h1`
    color: #7990ca;
`;

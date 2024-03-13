import React from "react";
import ToggleTodo from "./ToggleTodo";
import DeleteTodo from "./DeleteTodo";
import styled from "styled-components";

interface Todo {
    id: number;
    content: string;
    done: boolean;
}

interface TodoListProps {
    todoList: Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({ todoList, setTodoList }: TodoListProps) {
    return (
        <>
            {todoList.map((todo: Todo) => {
                return (
                    <Wrapper key={todo.id}>
                        <Item>
                            <ToggleTodo
                                id={todo.id}
                                todoList={todoList}
                                setTodoList={setTodoList}
                            />
                            <Content checked={todo.done}>
                                {todo.content}
                            </Content>
                            <DeleteTodo
                                id={todo.id}
                                done={todo.done} // 추가
                                setTodoList={setTodoList}
                            />
                        </Item>
                    </Wrapper>
                );
            })}
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    font-size: 30px;
`;

const Content = styled.p<{ checked: boolean }>`
    text-decoration: ${({ checked }) => checked && "line-through"};
`;

const Item = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #7990ca;
    margin-right: auto;
`;

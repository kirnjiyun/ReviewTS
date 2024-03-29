import React from 'react';
import ToggleTodo from './ToggleTodo';
import DeleteTodo from './DeleteTodo';
import styled from 'styled-components';

export default function TodoList({ todoList, setTodoList }) {
  return (
    <>
      {todoList.map((todo) => {
        return (
          <Wrapper>
            <Item>
              <ToggleTodo id={todo.id} todoList={todoList} setTodoList={setTodoList} />
              <Content checked={todo.done}>{todo.content}</Content>
              <DeleteTodo id={todo.id} setTodoList={setTodoList} />
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

const Content = styled.p`
  text-decoration: ${({ checked }) => checked && 'line-through'};
`;

const Item = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  color: #7990ca;
  margin-right: auto;
`;

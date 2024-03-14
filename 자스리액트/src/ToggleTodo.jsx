import React from 'react';
import styled from 'styled-components';

export default function ToggleTodo({ id, todoList, setTodoList }) {
  const onToggleTodo = () => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <Input type='checkbox' onChange={() => onToggleTodo()} />
    </>
  );
}

const Input = styled.input`
  cursor: pointer;
`;

import React from 'react';
import styled from 'styled-components';

export default function DeleteTodo({ id, setTodoList }) {
  const onDeleteTodo = () => {
    setTodoList((prevState) => prevState.filter((todo) => todo.id !== id));
  };
  return <Button onClick={() => onDeleteTodo()}>삭제</Button>;
}

const Button = styled.button`
  padding: 3px 15px;
  border: none;
  background-color: #939eb6;
  color: #f6f7f9;
  border-radius: 3px;

  cursor: pointer;

  &:hover {
    background-color: #7990ca;
  }
`;

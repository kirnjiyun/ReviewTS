import React from 'react';
import styled from 'styled-components';

interface DeleteTodoProps {
  id: number;
  setTodoList: React.Dispatch<
    React.SetStateAction<{ id: number; content: string; done: boolean }[]>
  >;
}

const DeleteTodo: React.FC<DeleteTodoProps> = ({ id, setTodoList }) => {
  const onDeleteTodo = () => {
    setTodoList((prevState) => prevState.filter((todo) => todo.id !== id));
  };
  return <Button onClick={() => onDeleteTodo()}>삭제</Button>;
};

export default DeleteTodo;

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

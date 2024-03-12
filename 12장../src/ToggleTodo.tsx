import React from 'react';
import styled from 'styled-components';

interface ToggleTodoProps {
  id: number;
  todoList: { id: number; content: string; done: boolean }[];
  setTodoList: React.Dispatch<
    React.SetStateAction<{ id: number; content: string; done: boolean }[]>
  >;
}

const ToggleTodo: React.FC<ToggleTodoProps> = ({ id, todoList, setTodoList }) => {
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
};

export default ToggleTodo;

const Input = styled.input`
  cursor: pointer;
`;

import React from "react";
import styled from "styled-components";

// interface DeleteTodoProps {
//     id: number;
//     setTodoList: React.Dispatch<
//         React.SetStateAction<{ id: number; content: string; done: boolean }[]>
//     >;
// }

// const DeleteTodo: React.FC<DeleteTodoProps> = ({ id, setTodoList }) => {
//     const onDeleteTodo = () => {
//         setTodoList((prevState) => prevState.filter((todo) => todo.id !== id));
//     };
//     return (
//         <Button isActive={true} onClick={() => onDeleteTodo()}>
//             삭제
//         </Button>
//     );
// };

interface DeleteTodoProps {
    id: number;
    done: boolean; // 할 일 완료 상태
    setTodoList: React.Dispatch<
        React.SetStateAction<{ id: number; content: string; done: boolean }[]>
    >;
}

const DeleteTodo: React.FC<DeleteTodoProps> = ({ id, done, setTodoList }) => {
    const onDeleteTodo = () => {
        setTodoList((prevState) => prevState.filter((todo) => todo.id !== id));
    };

    return (
        <Button isActive={done} onClick={() => onDeleteTodo()}>
            삭제
        </Button>
    );
};

export default DeleteTodo;

interface ButtonProps {
    isActive: boolean;
}

const Button = styled.button<ButtonProps>`
    padding: 3px 15px;
    border: none;
    background-color: ${(props) => (props.isActive ? "#7990ca" : "#939eb6")};
    color: #f6f7f9;
    border-radius: 3px;

    cursor: pointer;

    &:hover {
        background-color: #7990ca;
    }
`;

import React, { useEffect, useRef, useState } from "react";
import Editor from "./components/Editor";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";

export default function App() {
    const idRef = useRef(0);
    const [todos, setTodos] = useState<Todo[]>([]);

    const onClickAdd = (text: string) => {
        setTodos([...todos, { id: idRef.current++, content: text }]);
    };

    const onClickDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    useEffect(() => {
        console.log(todos);
    }, [todos]);
    return (
        <div>
            <h1>Todo</h1>
            <Editor onClickAdd={onClickAdd} />
            <div>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onClickDelete={onClickDelete}
                    />
                ))}
            </div>
        </div>
    );
}

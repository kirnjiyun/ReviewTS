import React, { useEffect, useReducer, useRef } from "react";
import Editor from "./components/Editor";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";

type Action =
    | { type: "CREATE"; data: { id: number; content: string } }
    | { type: "DELETE"; id: number };

function reducer(state: Todo[], action: Action): Todo[] {
    switch (action.type) {
        case "CREATE":
            return [...state, action.data];
        case "DELETE":
            return state.filter((todo) => todo.id !== action.id);
    }
}

export default function App() {
    const [todos, dispatch] = useReducer(reducer, []);
    const idRef = useRef(1);

    const onClickAdd = (text: string) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                content: text,
            },
        });
    };

    const onClickDelete = (id: number) => {
        dispatch({ type: "DELETE", id: id });
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

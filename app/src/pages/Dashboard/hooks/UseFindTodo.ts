import { useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";
import { todosAtom } from "../atom";
import { Todo } from "../dashboard.type";

const useFindTodo = (id: number) => {
    const todos = useAtomValue(todosAtom);

    // 検索結果を保存するstate
    const [targetTodo, setTargetTodo] = useState<Todo>({} as Todo);

    useEffect(() => {
        if (id < 0) {
            return;
        }

        const todoItem = todos.find((todo) => todo.id === id);

        if (!todoItem) {
            return;
        }

        setTargetTodo(todoItem);
    }, []);

    return {
        targetTodo
    }
}
export default useFindTodo;
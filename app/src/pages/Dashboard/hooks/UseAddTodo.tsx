import { useAtom, useSetAtom } from "jotai";
import React, { useCallback, useState } from "react";
import { todosAtom, addTodoModalAtom } from "../atom";
import { Todo } from "../dashboard.type";

const UseAddTodo = () => {
    const [todos, setTodos] = useAtom(todosAtom);
    const setIsShowModal = useSetAtom(addTodoModalAtom);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleClose = useCallback(() => {
        setIsShowModal(false);
        setTitle('');
        setDescription('');
    }, []);

    const handleSubmit = () => {
        if (!title) {
            // タイトルが空なら処理を止める
            return;
        }

        const value: Todo = {
            id: todos.slice(-1)[0]?.id >= 0 ? todos.slice(-1)[0]?.id + 1 : 0,
            title: title,
            description: description,
            isCompleted: false,
        };

        // todoを登録
        setTodos([...todos, value]);
        // モーダルを閉じる
        handleClose();
    };

    return {
        title,
        setTitle,
        description,
        setDescription,
        handleClose,
        handleSubmit,
    };
}
export default UseAddTodo;
import { useAtom, useSetAtom } from "jotai";
import React, { useCallback, useEffect, useState } from "react";
import { todosAtom, selectedTodoIdAtom, editTodoModalAtom } from "../atom";
import { Todo } from "../dashboard.type";

const UseEditTodo = () => {
    const [todos, setTodos] = useAtom(todosAtom);
    const [selectedTodoId, setSelectedTodoId] = useAtom(selectedTodoIdAtom);
    const setIsEditModal = useSetAtom(editTodoModalAtom);

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        const todo = todos.find((todo) => todo.id === selectedTodoId);

        if (!todo) {
            return;
        }

        setTitle(todo.title);
        setDescription(todo.description);
    }, [selectedTodoId]);

    const handleClose = useCallback(() => {
        setIsEditModal(false);
        setTitle('');
        setDescription('');
        setSelectedTodoId(undefined);
    }, []);

    const handleEdit = () => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === selectedTodoId) {
                    const editData: Todo = {
                        ...todo,
                        title: title,
                        description: description,
                    };
                    return editData;
                }
                return todo;
            })
        );

        // モーダルを閉じる
        handleClose();
    }

    const handleDelete = () => {
        setTodos(
            todos.filter(todo => todo.id !== selectedTodoId)
        );
        // モーダルを閉じる
        handleClose();
    };

    return {
        setIsEditModal,
        title,
        setTitle,
        description,
        setDescription,
        handleClose,
        handleDelete,
        handleEdit,
    };
}
export default UseEditTodo;
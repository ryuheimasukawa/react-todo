import React from "react";
import { Button, } from "react-bootstrap";
import TodoItem from "./components/TodoItem";
import TodoModal from "./components/TodoModal";
import { useAtom, useSetAtom } from "jotai";
import { modalAtom } from "./atom";

const Index: React.FC = () => {

    const todos = [
        {
            id: 1,
            title: 'タイトル',
            description: '詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載',
            isCompleted: true,
        },
        {
            id: 2,
            title: 'タイトル',
            description: '詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載',
            isCompleted: false,
        },
        {
            id: 3,
            title: 'タイトル',
            description: '詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載',
            isCompleted: false,
        },
        {
            id: 4,
            title: 'タイトル',
            description: '詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載',
            isCompleted: true,
        },
        {
            id: 5,
            title: 'タイトル',
            description: '詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を',
            isCompleted: false,
        },
        {
            id: 6,
            title: 'タイトル',
            description: '詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載詳細を記載',
            isCompleted: false,
        },
    ]
    const setModal = useSetAtom(modalAtom);

    return (
        <div>
            <h1>TODO</h1>
            <TodoItem todos={todos} />
            <Button
                variant="primary"
                onClick={() => {
                    setModal({
                        isShow: true,
                        type: 'add'
                    });
                }
                }
            >
                TODO追加
            </Button>
            <TodoModal />
        </div >
    )
}
export default Index;
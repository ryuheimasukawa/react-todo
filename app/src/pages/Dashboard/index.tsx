import React from "react";
import { Button, } from "react-bootstrap";
import TodoItem from "./components/TodoItem";
import TodoModal from "./components/TodoModal";
import { useSetAtom } from "jotai";
import { addTodoModalAtom } from "./atom";

const Index: React.FC = () => {
    const setIsShowModal = useSetAtom(addTodoModalAtom);

    return (
        <div>
            <h1>TODO</h1>
            <TodoItem />
            <Button
                variant="primary"
                onClick={() => setIsShowModal(true)}
            >
                TODO追加
            </Button>
            <TodoModal />
        </div >
    )
}
export default Index;
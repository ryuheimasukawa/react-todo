import React from "react";
import { Button, } from "react-bootstrap";
import TodoItem from "./components/TodoItem";
import TodoModal from "./components/TodoModal";
import { useAtom } from "jotai";
import { modalAtom } from "./atom";

const Index: React.FC = () => {
    const [modal, setModal] = useAtom(modalAtom);

    return (
        <div>
            <h1>TODO</h1>
            <TodoItem />
            <Button
                variant="primary"
                onClick={() => {
                    setModal({
                        ...modal,
                        isShow: true
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
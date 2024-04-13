import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Form, Button } from "react-bootstrap";
import { Modal as ModalType, Todo } from "../dashboard.type";
import { useAtom } from "jotai";
import { modalAtom, todosAtom } from '../atom';
import useFindTodo from "../hooks/UseFindTodo";

const StyledButtonWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`

const TodoModal: React.FC = () => {
    const [todos, setTodos] = useAtom(todosAtom);
    const [modal, setModal] = useAtom(modalAtom);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleClose = useCallback(() => {
        setModal({} as ModalType);
        setTitle('');
        setDescription('');
    }, []);

    const handleSubmit = () => {
        if (!title) {
            // タイトルが空なら処理を止める
            return;
        }

        const value: Todo = {
            id: todos.length + 1,
            title: title,
            description: description,
            isCompleted: false,
        };

        // todoを登録
        setTodos([...todos, value]);
        // モーダルを閉じる
        handleClose();
    };

    const { targetTodo } = useFindTodo(modal.todoId);

    useEffect(() => {
        console.log('targetTodo', targetTodo);
        if (!targetTodo) {
            return;
        }

        setTitle(targetTodo.title);
        setDescription(targetTodo.description);
    }, [targetTodo]);

    return (
        <Modal
            centered
            show={modal.isShow}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>TODO追加</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>タスク名</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>説明</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <StyledButtonWrap>
                        <Button
                            style={{ marginRight: '10px' }}
                            variant="secondary"
                            onClick={handleClose}
                        >
                            キャンセル
                        </Button>
                        <Button
                            variant="primary"
                            disabled={!Boolean(title)}
                            onClick={handleSubmit}
                        >
                            追加
                        </Button>
                    </StyledButtonWrap>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
TodoModal.displayName = 'TodoModal';
export default TodoModal;
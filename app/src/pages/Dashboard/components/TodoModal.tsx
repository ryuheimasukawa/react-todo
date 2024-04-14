import React, { useCallback, useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Todo } from "../dashboard.type";
import { useAtom } from "jotai";
import { addTodoModalAtom, todosAtom } from '../atom';
import { StyledButtonWrap } from "../style";

const TodoModal: React.FC = () => {
    const [todos, setTodos] = useAtom(todosAtom);
    const [isShowModal, setIsShowModal] = useAtom(addTodoModalAtom);
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

    return (
        <Modal
            centered
            show={isShowModal}
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
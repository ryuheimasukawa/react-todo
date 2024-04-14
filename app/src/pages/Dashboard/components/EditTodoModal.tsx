import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { StyledButtonWrap } from "../style";
import UseEditTodo from "../hooks/UseEditTodo";

type Props = {
    isShow: boolean;
}

const EditTodoModal: React.FC<Props> = ({ isShow }) => {
    const {
        setIsEditModal,
        title,
        setTitle,
        description,
        setDescription,
        handleClose,
        handleDelete,
        handleEdit,
    } = UseEditTodo();

    return (
        <Modal
            centered
            show={isShow}
            onHide={() => setIsEditModal(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>編集</Modal.Title>
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
                            variant="danger"
                            onClick={handleDelete}
                        >
                            削除
                        </Button>
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
                            onClick={handleEdit}
                        >
                            保存
                        </Button>
                    </StyledButtonWrap>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
export default EditTodoModal;
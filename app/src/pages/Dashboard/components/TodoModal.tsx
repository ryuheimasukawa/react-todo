import React from "react";
import { Modal } from "react-bootstrap";
import { Modal as ModalType } from "../dashboard.type";
import { useAtom } from "jotai";
import { modalAtom } from "../atom";

const TodoModal: React.FC = () => {
    const [modal, setModal] = useAtom(modalAtom);

    return (
        <Modal
            centered
            show={modal.isShow}
            onHide={() => {
                setModal({} as ModalType);
            }}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        </Modal>
    );
}
TodoModal.displayName = 'TodoModal';
export default TodoModal;
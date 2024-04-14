import React from "react";
import styled, { css } from "styled-components";
import { Card } from "react-bootstrap";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { editTodoModalAtom, selectedTodoIdAtom, todosAtom } from "../atom";
import EditTodoModal from "./EditTodoModal";

const StyledCardWrap = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin: 30px auto;
`
const StyledLabel = styled.label`
    width: 30%;

    &:hover {
        opacity: 0.7;
    }
    `

const StyledCardHeader = styled(Card.Header) <{ completed: boolean }>`
    height: 40px;

    ${(props) => props.completed && css`
        text-decoration: line-through;
    `}
`

const StyledCardBody = styled(Card.Body)`
    height: 100px;
    overflow: hidden;
`

const TodoItem: React.FC = () => {
    const todos = useAtomValue(todosAtom);
    const [isEditModal, setIsEditModal] = useAtom(editTodoModalAtom);
    const setSelectedTodoId = useSetAtom(selectedTodoIdAtom);
    return (
        <StyledCardWrap>
            {todos?.map((todo, index) => (
                <>
                    <StyledLabel
                        htmlFor={`todo-card-${index}`}
                        onClick={() => {
                            setSelectedTodoId(todo.id);
                            setIsEditModal(true);
                        }}
                        key={index}
                    >
                        <Card border={todo.isCompleted ? 'primary' : ''}>
                            <input
                                type="checkbox"
                                id={`todo-card-${index}`}
                                hidden
                            />
                            <StyledCardHeader
                                completed={todo.isCompleted}
                            >
                                {todo.title}
                            </StyledCardHeader>
                            <StyledCardBody>
                                {todo.description}
                            </StyledCardBody>
                        </Card>
                    </StyledLabel>
                </>
            ))}
            <EditTodoModal
                isShow={isEditModal}
            />
        </StyledCardWrap>
    );
}
TodoItem.displayName = 'TodoItem';
export default TodoItem;
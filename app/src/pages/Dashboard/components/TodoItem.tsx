import React from "react";
import styled, { css } from "styled-components";
import { Card } from "react-bootstrap";
import { useAtomValue, useSetAtom } from "jotai";
import { modalAtom, todosAtom } from "../atom";

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

const StyledCardHeader = styled(Card.Header) <{ isCompleted: boolean }>`
    height: 40px;

    ${(props) => props.isCompleted && css`
        text-decoration: line-through;
    `}
`

const StyledCardBody = styled(Card.Body)`
    height: 100px;
    overflow: hidden;
`

const TodoItem: React.FC = () => {
    const todos = useAtomValue(todosAtom);
    const setModal = useSetAtom(modalAtom);
    return (
        <StyledCardWrap>
            {todos?.map((todo, index) => (
                <StyledLabel
                    htmlFor={`todo-card-${index}`}
                    onClick={() => {
                        setModal({
                            isShow: true,
                            todoId: todo.id,
                        })
                    }}
                >
                    <Card border={todo.isCompleted ? 'primary' : ''}>
                        <input
                            type="checkbox"
                            id={`todo-card-${index}`}
                            hidden
                        />
                        <StyledCardHeader
                            isCompleted={todo.isCompleted}
                        >
                            {todo.title}
                        </StyledCardHeader>
                        <StyledCardBody>
                            {todo.description}
                        </StyledCardBody>
                    </Card>
                </StyledLabel>
            ))}
        </StyledCardWrap>
    );
}
TodoItem.displayName = 'TodoItem';
export default TodoItem;
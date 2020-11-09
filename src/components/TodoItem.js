import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const Modify = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff5364;
  }
`;

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #5c50f0;
  }
`;

const CheckBox = styled.div`
  display: flex;
  margin-right: 20px;
  font-size: 24px;
  color: #ced4da;
  cursor: pointer;
  ${props => props.done && css`
    color: #ff5768;
  `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #82819e;
  cursor: pointer;
  ${props => props.done && css`
    color: #cecede;
    text-decoration: line-through;
  `}
`;

const Input = styled.input`
  padding: 5px 12px;
  width: 100%;
  border: 1px solid #dee9f1;
  border-radius: 4px;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 28px 32px;
  border-top: 1px solid #edf3f8;
  &:first-child {
    border-top: 0;
  }
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({
    type: 'TOGGLE',
    id
  });
  const onRemove = () => dispatch({
    type: 'REMOVE',
    id
  });
  return (
    <TodoItemBlock>
      <CheckBox done={done} onClick={onToggle}>
        {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank/>}
      </CheckBox>
      <Text done={done}>
        {text}
      </Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
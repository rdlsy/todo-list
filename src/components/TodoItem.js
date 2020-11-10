import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete, MdDone } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

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
  @media only screen and (max-width: 525px) {
    opacity: 1;
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
  @media only screen and (max-width: 525px) {
    margin-right: 5px;
  }
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #82819e;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${props => props.done && css`
    color: #cecede;
    text-decoration: line-through;
  `}
`;

const Input = styled.input`
  padding: 5px 12px;
  width: 100%;
  height: 42px;
  border: 1px solid #dee9f1;
  border-radius: 4px;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const Modify = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5c4ff0;
  font-size: 24px;
  cursor: pointer;
  padding: 0 5px;
  background: none;
  border: none;
  outline: none;
`

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 32px;
  height: 83px;
  border-top: 1px solid #edf3f8;
  box-sizing: border-box;
  &:first-child {
    border-top: 0;
  }
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 525px) {
    height: 72px;
  }
`;

function TodoItem({ id, done, text }) {
  const [selectedTodo, setSelectedTodo] = useState('');
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({
    type: 'TOGGLE',
    id
  });
  const onRemove = () => dispatch({
    type: 'REMOVE',
    id
  });
  const onUpdate = (id, text) => {
    dispatch({
      type: 'UPDATE',
      id,
      text: text
    });
    setSelectedTodo('');
  }
  const onEdit = () => {
    setSelectedTodo(text);
  }
  const onChange = e => setSelectedTodo(e.target.value);
  return (
    <TodoItemBlock>
      <CheckBox done={done} onClick={onToggle}>
        {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank/>}
      </CheckBox>
      <Text done={done} onClick={onEdit}>
        {selectedTodo ? <Input onChange={onChange} value={selectedTodo} autoFocus /> : text}
      </Text>
      {
        selectedTodo && 
        <Modify onClick={() => onUpdate(id, selectedTodo)}>
          <MdDone />
        </Modify>
      }
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
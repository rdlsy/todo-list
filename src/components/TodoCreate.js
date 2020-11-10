import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
  background: #ff5769;
  &:hover {
    background: #fd7685;
  }
  &:active {
    background: #f93c4f;
  }
  position: absolute;
  right: 35px;
  top: 96px;
  padding: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  border: none;
  outline: none;
  font-size: 30px;
  color: #fff;
  z-index: 5;
  cursor: pointer;
  transition: .125s all ease-in;
  ${props => props.open && css`
    background: #5a4fe8;
    &:hover {
      background: #7166f4;
    }
    &:active {
      background: #493ced;
    }
    transform: rotate(45deg);
  `}
  @media only screen and (max-width: 525px) {
    top: 85px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
`;

const InsertFormPositioner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const InsertForm = styled.form`
  padding: 40px 30px 25px;
  height: 127px;
  background: #fcfcff;
  border-bottom: 1px solid #dee9f1;
  border-top-left-radius: 10px; 
  border-top-right-radius: 10px;
  box-sizing: border-box;
  @media only screen and (max-width: 525px) {
    padding: 30px 20px 20px;
    height: 108px;
  }
`;

const Input = styled.input`
  padding: 12px;
  width: 100%;
  border: 1px solid #dee9f1;
  border-radius: 4px;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input placeholder="할 일을 입력 후, Enter 를 누르세요" autoFocus onChange={onChange} value={value} />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
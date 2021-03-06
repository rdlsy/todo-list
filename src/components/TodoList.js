import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 30px 0 48px;
  overflow-y: auto;
  @media only screen and (max-width: 525px) {
    padding: 15px 0 35px;
  }
`

function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map(todo => <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />)}
    </TodoListBlock>
  );
}

export default TodoList;
import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 30px 25px;
  height: 127px;
  background: #fcfcff;
  border-bottom: 1px solid #dee9f1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-sizing: border-box;

  h1 {
    margin: 0;
    line-height: 1;
    font-size: 26px;
    color: #675aff;
  }

  .month {
    margin-top: 15px;
    color: #9b9ab5;
    font-size: 17px;
  }

  .task-left {
    margin-top: 5px;
    color: #a8a7cd;
    font-size: 17px;
    font-weight: bold;
  }
`

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('en-US', {
    weekday: 'long'
  });
  return (
    <TodoHeadBlock>
      <div className="today">
        <h1>{dateString}</h1>
        <div className="month">{dayName}</div>
      </div>
      <div className="task-left">{undoneTasks.length} Tasks</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
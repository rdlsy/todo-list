import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 748px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .04);
`

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
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
  @media only screen and (max-width: 525px) {
    flex-direction: normal;
    width: 100%;
    height: 95vh;
  }
  @media only screen and (orientation: landscape) {
    margin: 0 auto;
  }
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
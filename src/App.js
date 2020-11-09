import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5% 3%;
    height: 100vh;
    background: #5a4eeb;
    box-sizing: border-box;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 40vh;
      background: #ff616f;
    }
    #wave {
      position: absolute;
      left: 50%;
      bottom: 39vh;
      width: 100%;
      transform: translateX(-50%);
      fill: #ff616f;
    }
    @media only screen and (max-width: 525px) {
      display: block;
    }
  }
  
`

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <svg id="wave" data-name="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1401 180.42">
        <path d="M0,266.14S192.19,113.29,487.28,120.85c307.46,7.89,309.53,228.63,912.72,81.09V300H0Z" transform="translate(0.5 -120.08)"/>
      </svg>
      <TodoTemplate>
        <TodoHead />
        <TodoCreate />
        <TodoList />
      </TodoTemplate>
    </TodoProvider>
  )
}

export default App;

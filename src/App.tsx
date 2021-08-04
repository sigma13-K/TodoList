import React from 'react';
import Styled from 'styled-components/native';

import { TodoListContextProvider } from './Context/TodoListContext';

import Todo from './Screens/Todo';

const Container = Styled.View`
  flex: 1;  
  background-color: #EEE;
`;

// Used Provider Component from Context, used as highest common parent component
// Every components (child of App.tsx component) can use Context from Todo List
const App = () => {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  )
}
export default App;

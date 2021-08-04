import React from 'react';
import Styled from 'styled-components/native';

import Header from './Header';
import TodoList from './TodoList';

const Container = Styled.SafeAreaView`
    flex: 1;
`;

interface Props {}

//Contains Header component for showing app's name, TodoList component for printing todo list
const TodoListView = ({  }: Props) => {
    return (
        <Container>
            <Header />
            <TodoList />
        </Container>
    );
};
export default TodoListView;
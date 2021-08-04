import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/TodoListContext';

import EmptyItem from './EmptyItem';
import TodoItem from './TodoItem';

const Container = Styled(FlatList)`
`;

interface Props {}

const TodoList = ({  }: Props) => {
    const { todoList, removeTodoList } = useContext<ITodoListContext>(
        TodoListContext
    );
    return (
        // Used FlatList Component (one of React Native List View), it can use Props
        // [data] => data array for displaying in List View
        // [keyExtractor => In order to display same component repeatably, you should set key in the component
        //      'react' distinguishes components with this key
        //      if not set,'react' can't distinguish components, shows warning messages
        //      keyExtractor is Props to set key for the Item (repeatably displayed)
        // [ListEmptyComponent] => Component which is displayed when the given array has no data
        // [renderItem] => Repeatably displayed component (uses data from given array)
        // [contentContainerStyle] => set flex to 1 in order to display ListEmptyComponent for the full screen
        <Container
            data={todoList}
            keyExtractor={(item, index) => {
                return `todo-${index}`;
            }}
            ListEmptyComponent={<EmptyItem />}
            renderItem={({ item, index }) => (
                <TodoItem
                    text={item as string}
                    onDelete={() => removeTodoList(index)}
                />
            )}
            contentContainerStyle={todoList.length === 0 && { flex: 1 }}
        />
    );
};
export default TodoList;

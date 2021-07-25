// useEffect (similar with life-cycle function of class component)
import React, { createContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-community/async-storage' // for prev versions of react
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

// Determined data typde of Context using ITodoListContext (predefined in @types/index.d.ts)
const TodoListContext = createContext<ITodoListContext>({
    // string array
    todoList: [],
    // add datas in 'todoList' array, empty function pre-inserted
    addTodoList: (todo: string): void => {},
    // remove datas from 'todoList' array
    removeTodoList: (index: number): void => {},
});

// Will be used as common parent component's parent component
// Children components delivered to children parameter
const TodoListContextProvider = ({ children }: Props) => {
    // Edit State values using useState function
    const [todoList, setTodoList] = useState<Array<string>>([]);

    // As 'todoList' is immutable, creates new list which has prev list items and new item, puts in todoList
    const addTodoList = (todo: string): void => {
        const list = [...todoList, todo];
        setTodoList(list);
        // physically saving datas using AsyncStorage 'setItem' function, manages data using (key-value) form
        AsyncStorage.setItem('todoList', JSON.stringify(list));  // saves list as string using JSON.stringify function
    };

    // Removes date item from todoList using index
    const removeTodoList = (index: number): void => {
        // making new variable using 'let'
        let list = [...todoList];
        // removes item using index (splice function)
        list.splice(index, 1);
        // saves new list variable into 'todoList'
        setTodoList(list);
        // saving datas using AsyncStorage 'setItem' function
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    };

    // Updates new todoList physically using AsyncStorage
    const initData = async () => {
        // getItem, setItem are 'Promise Function'
        // in order to initiate the value right away, uses 'await' (async-await) (synchronization)
        try {
            const list = await AsyncStorage.getItem('todoList');
            if (list !== null) {
                // as data in AsyncStorage is string, use JSON.parse function to reform into list data 
                setTodoList(JSON.parse(list));
            }
        } catch (e) {
            console.log(e);
        }
    };

    // Functioning similarly to componentDidMount function (life-cycle func of Class Component)
    useEffect(() => {
        initData();
    }, []);

    return (
        <TodoListContext.Provider
            value={{
                todoList,
                addTodoList,
                removeTodoList,
            }}>
            {children}
        </TodoListContext.Provider>
    );
};

export { TodoListContextProvider, TodoListContext };
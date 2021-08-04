import React, {useContext} from 'react';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/TodoListContext';

const Input = Styled.TextInput`
    width: 100%;
    height: 40px;
    background-color: #FFF;
    padding: 0px 8px;
`;

interface Props {
    hideTodoInput: () => void;
}

// TextInput uses 'useContext' to use Context (init value => TodoListContext)
// uses addTodoList function to add data into todo list (global variable)
// addTodoList is connected to onSubmitEditing function (called when "완료" is clicked on keyboard, function of TextInput)
// the function calls hideTodoInput function to hide componet after saving data
const TextInput = ({ hideTodoInput }: Props) => {
    const { addTodoList } = useContext<ITodoListContext>(TodoListContext);
    return (
        <Input
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="할 일을 입력해주세요!"
            returnKeyType="done"
            onSubmitEditing={({ nativeEvent}) => {
                addTodoList(nativeEvent.text);
                hideTodoInput();
            }}
        />
    );
};
export default TextInput;

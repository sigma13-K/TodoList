import React, { useState } from 'react';

import AddButton from './AddButton';
import TodoInput from './TodoInput';

interface Props {}

// Contains TodoInput component (get todo data as input), AddButton component (display TodoInput component)
// 
const AddTodo = ({  }: Props) => {
    const [showInput, setShowInput] = useState<boolean>(false);
    return (
        <>
            <AddButton onPress={() => setShowInput(true)} />
            {showInput && <TodoInput hideTodoInput={() => setShowInput(false)}/>}
        </>
    );
};
export default AddTodo;
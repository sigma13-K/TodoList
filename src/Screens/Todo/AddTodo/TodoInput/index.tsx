import React from 'react';
import {Platform} from 'react-native';
import Styled from 'styled-components/native';

// Contains Background (makes dark background) component, TextInput (inputs todo texts) component
import Background from './Background';
import TextInput from './TextInput';

const Container = Styled.KeyboardAvoidingView`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: flex-end;
`;

// in order to hide TodoInput component (displayed on screen), delivered hideTodoInput function from parent component (AddTodo)
interface Props {
    hideTodoInput: () => void;
}

// hideTodoInput function is called when Background component is selected and TextInput finishes text input
// TodoInput uses KeyboardAvoidingView component
// KeyboardAvoidingView prevents keyboard making input area hidden (gives padding option ONLY IN IOS)
// React Native provides Platform Module in order to discriminate iOS and Android, etc
const TodoInput = ({ hideTodoInput }: Props) => {
    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding': undefined}>
            <Background onPress={hideTodoInput} />
            <TextInput hideTodoInput={hideTodoInput} />
        </Container>
    );
};
export default TodoInput;

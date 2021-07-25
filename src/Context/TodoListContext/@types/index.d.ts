// Define data type for all files in this project (@types/index.d.ts)
interface ITodoListContext {
    todoList: Array<string>;
    addTodoList: (todo: string) => void;
    removeTodoList: (index: number) => void;
}
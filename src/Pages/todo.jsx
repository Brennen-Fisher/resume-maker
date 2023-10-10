import React from 'react'
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import TotalCompleteItems from '../components/TotalCompleteItems';

function Todo() {
    return (
        <div className='w-full h-[1000px] flex flex-col justify-center items-center'>
            todo
            <AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
        </div>
    )
}

export default Todo;
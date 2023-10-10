import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(toggleCompleteAsync({ id: id, completed: !completed })
		);
	}

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id: id })
		);
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='flex justify-between'>
				<span className='flex items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={handleCompleteClick}></input>
					{title}
				</span>
				<button className='bg-blue-500 hover:bg-blue-700 hover:underline' onClick={handleDeleteClick}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
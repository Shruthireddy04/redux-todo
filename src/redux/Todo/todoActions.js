import { ADD_TODO, COMPLETED_TODO, REMOVE_TODO } from './todoTypes';

export const addTodo = (item) => {
	return {
		type: ADD_TODO,
		payload: item,
	};
};

export const removeTodo = (id) => {
	return {
		type: REMOVE_TODO,
		payload: id,
	};
};

export const completedTodo = (id) => {
	return {
		type: COMPLETED_TODO,
		payload: id,
	};
};

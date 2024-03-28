import { ADD_TODO, REMOVE_TODO, COMPLETED_TODO } from './todoTypes';
const initialState = {
	todoList: [],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todoList: [...state.todoList, action.payload],
			};
		case REMOVE_TODO:
			const filterList = state.todoList?.filter((item) => {
				return item.id !== action.payload;
			});
			return {
				...state,
				todoList: filterList,
			};
		case COMPLETED_TODO:
			const checkToggleList = state.todoList?.map((item) => {
				if (item.id === action.payload) {
					return {
						...item,
						checked: !item.checked,
					};
				} else return item;
			});
			return {
				...state,
				todoList: checkToggleList,
			};
		default:
			return state;
	}
};

export default todoReducer;

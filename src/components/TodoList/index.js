import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './index.css';
import {
	addTodo,
	completedTodo,
	removeTodo,
} from '../../redux/Todo/todoActions';
import { connect } from 'react-redux';

function TodoList({ list, addTodo, removeTodo, completedTodo }) {
	const [inputVal, setInputVal] = useState('');
	// const [list, setList] = useState([]);
	return (
		<div className="todoList">
			<h1>Todo Tracker</h1>
			<div className="cnt">
				<input
					type="text"
					value={inputVal}
					onChange={(e) => setInputVal(e.target.value)}
				/>
				<button
					onClick={() =>
						addTodo({ label: inputVal, id: uuidv4(), checked: false })
					}
					className="addButton"
				>
					Save
				</button>
			</div>

			{list?.length > 0 &&
				list?.map((item) => {
					return (
						<>
							{' '}
							<div className="itemCnt">
								<div className="checkboxItem">
									<input
										className="checkBox"
										onChange={(e) => completedTodo(item.id)}
										type="checkbox"
									/>
									<div
										key={item.id}
										className={item?.checked ? 'checkedItem' : ''}
									>
										{item.label}
									</div>
								</div>
								<button
									onClick={() => removeTodo(item.id)}
									className={`addButton removeButton`}
								>
									Remove
								</button>
							</div>
							<hr />
						</>
					);
				})}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		list: state.todoList,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (item) => dispatch(addTodo(item)),
		removeTodo: (id) => dispatch(removeTodo(id)),
		completedTodo: (id) => dispatch(completedTodo(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

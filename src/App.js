import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<TodoList />
			</div>
		</Provider>
	);
}

export default App;

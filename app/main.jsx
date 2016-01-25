import React from 'react';
import Hello from './components/Hello.jsx';
import World from './components/World.jsx';
import Timer from './components/Timer.jsx';
import Counter from './components/Counter.jsx';
import Todo from './components/Todo.jsx';
class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Hello name="Hello"/>
				<Timer />
				<Counter />
				<Todo/>
			</div>
			);
	}
}

function main() {
	React.render(<App />,document.getElementById('app'));
}

main();
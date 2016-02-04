import React from 'react';
import Hello from './components/Hello.jsx';
import World from './components/World.jsx';
import Timer from './components/Timer.jsx';
import Counter from './components/Counter.jsx';
import Todo from './components/Todo.jsx';
import SwipeCtrl from './components/SwipeCtrl.jsx';
class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<SwipeCtrl maxSwipe={100} direction='LEFT'>左滑动</SwipeCtrl>

				<SwipeCtrl maxSwipe={200} direction='RIGHT'>右滑动</SwipeCtrl>

				<SwipeCtrl maxSwipe={150} direction='BOTH'>左右</SwipeCtrl>
			</div>
			);
	}
}

function main() {
	React.render(<App />,document.getElementById('app'));
}

main();
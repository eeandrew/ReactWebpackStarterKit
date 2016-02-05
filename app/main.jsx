import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/Hello.jsx';
import World from './components/World.jsx';
import Timer from './components/Timer.jsx';
import Counter from './components/Counter.jsx';
import Todo from './components/Todo.jsx';
import SwipeCtrl from './components/SwipeCtrl.jsx';
import Carousel from './components/carousel/Carousel.jsx';

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		let carouselItem = {
			height:'200px',
			width:'500px',
			background:'#eee',
			display:'block',
			float:'left',
		};
		return (
				<Carousel> 
					<div style={carouselItem}>test1</div>
					<div style={carouselItem}>test2</div>
				</Carousel>
			);
	}
}

function main() {
	ReactDom.render(<App />,document.getElementById('app'));
}

main();
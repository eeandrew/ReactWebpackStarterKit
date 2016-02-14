import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/Hello.jsx';
import World from './components/World.jsx';
import Timer from './components/Timer.jsx';
import Counter from './components/Counter.jsx';
import Todo from './components/Todo.jsx';
import SwipeCtrl from './components/SwipeCtrl.jsx';
import Carousel from './components/carousel/Carousel.jsx';
import Alert from './components/Alert.jsx';
import SimpleRemove from './components/SimpleRemove.jsx';
import AutoSize from './components/AutoSize.jsx'

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
				<SwipeCtrl maxSwipe={200} >
					滑动
				</SwipeCtrl>
			);
	}
}

function main() {
	const alertStr = {
		str : 'hello world'
	};
	const sampleTxt = 'Lorem ipsum dolor sit amet, \
	consectetur adipiscing elit, sed do eiusmod tempor\
	 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
	  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \
	  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
	   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, \
	   sunt in culpa qui officia deserunt mollit anim id est laborum';
	ReactDom.render(<AutoSize>{sampleTxt}</AutoSize>,document.getElementById('app'));
}

main();
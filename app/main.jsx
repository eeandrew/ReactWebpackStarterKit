import React from 'react';
import Hello from './components/Hello.jsx';
import World from './components/World.jsx';
import Timer from './components/Timer.jsx';
import Counter from './components/Counter.jsx';

function main() {
	React.render(<div><Hello name="Hello"/><Timer /><Counter /></div>,document.getElementById('app'));
}

main();
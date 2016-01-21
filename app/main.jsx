import React from 'react';
import Hello from './components/Hello.jsx';
import World from './components/World.jsx';

function main() {
	React.render(<div><Hello /><World/></div>,document.getElementById('app'));
}

main();
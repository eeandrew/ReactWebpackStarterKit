import React from 'react';
import './World.css';

export default class World extends React.Component {

	nowStr () {
		return new Date() + '';
	}

	render() {
		return <h1 className="world">{this.nowStr()}</h1>
	}
}
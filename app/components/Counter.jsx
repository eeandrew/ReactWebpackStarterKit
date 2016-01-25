import React from 'react';

export default class Counter extends React.Component {
	constructor() {
		super();
		this.state = {counter:0};
	}
	onClick(e) {
		this.setState({counter:++this.state.counter})
	}
	render() {
		return <h2 onClick={this.onClick.bind(this)}>{this.state.counter}</h2>
	}
}
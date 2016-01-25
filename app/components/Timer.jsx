import React from 'react';

export default class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {count: new Date()+''};
	}
	tick() {
		this.setState({count: new Date()+''});
	}
	componentDidMount() {
		setInterval(this.tick.bind(this),1000);
	}
	render() {
		return <h2>{this.state.count}</h2>
	}
}

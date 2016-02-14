import React from 'react';
import Animation from 'rc-animate';
import './Alert.css';

export default class SimpleRemove extends React.Component {

	constructor() {
		super();
		this.state = {
			show : true
		};
	}

	toggle() {
		this.setState({
			show : !this.state.show
		});
	}

	render() {
		const style = {
			width:200,
			height:200,
			background:'red'
		};
		return (
			<div>
				<button onClick={this.toggle.bind(this)}>Toggle</button>
				<Animation component="" transitionName="fade">
					{this.state.show? <div style={style}/> :null}
				</Animation>
			</div>
		);
	}
}


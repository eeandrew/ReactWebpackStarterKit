import React from 'react';
import Animation from 'rc-animate';
import './Alert.css';

export default class SimpleRemove extends React.Component {

	constructor() {
		super();
		this.state = {
			show : true,
			enter : true
		};
	}

	toggle(type) {
		this.setState({
			[type] : !this.state[type]
		});
	}

	render() {
		const style = {
			width:200,
			height:200,
			background:'red'
		};
		let enterTxt = this.state.enter? 'YES' :'NO';
		return (
			<div>
				<button onClick={this.toggle.bind(this,'show')}>Toggle</button>

				<Animation exclusive={true}  component="" transitionName="fade" transitionAppear>
					{this.state.show? <div style={style}/> :null}
				</Animation>

				<Animation exclusive={true} transitionName="fade" transitionLeave={false}>
					<button key={enterTxt} onClick={this.toggle.bind(this,'enter')}>{enterTxt}</button>
				</Animation>
			</div>
		);
	}
}


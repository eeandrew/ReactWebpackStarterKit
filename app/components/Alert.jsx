import React from 'react';
import Animate from 'rc-animate';
import './Alert.css';

const Div = (props) => {
	const {style,show} = props;
	const newStyle = Object.assign({},style,{
		display:show ? '' :'none'
	});
	return <div {...props} style={newStyle}></div>
}

export default class Alert extends React.Component {
	constructor() {
		super();
		this.state = {
			show : true
		};
	}

	handleClick() {
		this.setState({
			show:!this.state.show
		});
		console.log('handleClick')
	}

	render() {
		const style = {
			background: 'yellow',
			width : 600,
			padding : 20,
			marginLeft : 'auto',
			marginRight : 'auto',
		};
		return (
			<div>
				<label><input type="checkbox" onChange={this.handleClick.bind(this)} checked={this.state.show}/>show</label>
				<Animate component="" showProp="show" transitionName="fade">
					<Div style={style} show={this.state.show}>{this.props.str}</Div>
				</Animate>
			</div>
		)
	}
}

Alert.propTypes = {
	time : React.PropTypes.number,
	type : React.PropTypes.number,
	str : React.PropTypes.string,
	onEnd : React.PropTypes.func
};

Alert.defaultProps = {
	time : 2000,
	type : 'success',
	onEnd() {
	}
};
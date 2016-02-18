import React from 'react';

export default class ProgressBar extends React.Component {

	constructor() {
		super();
		this.state = {
			width:0
		};
	}

	componentDidMount() {
		setTimeout(()=>{
			this.setState({
				width: this.getWidthValue(this.props.progress)
			});
		},1);
	}

	getWidthValue(progress) {
		return progress > 100 ? 100 : progress;
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			width: this.getWidthValue(nextProps.progress)
		});
	}


	render() {
		let partentStyle = {
			width:'100%',
			height:'6px',
			border:'1px solid #FFFFFF',
			borderRadius:'6px',
			boxSizing: 'border-box'
		};
		let barStyle = {
			height:'4px',
			background:'#FFFFFF',
			borderRadius:'4px',
			transition:'width 2s',
			msTransition:'width 2s',
			WebkitTransition:'width 2s',
			width: this.state.width + '%',
		}
		return (
			<div style={partentStyle} className={this.props.wrapperStyle}>
				<div style={barStyle} className={this.props.barStyle}></div>
			</div>	
		);
	}
}

ProgressBar.propTypes = {
	progress : React.PropTypes.number.isRequired,
	wrapperStyle : React.PropTypes.string,
	barStyle : React.PropTypes.string,
}

ProgressBar.defaultProps = {
	progress : 0,
}
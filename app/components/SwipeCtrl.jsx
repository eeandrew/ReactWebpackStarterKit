import React from 'react';
import './SwipeCtrl.css';
import SwipeCtrlEventHandler from './mixins/swipe-ctrl-event-handlers.jsx';

export default class SwipeCtrl extends React.Component {
	constructor() {
		super();
		this.state = {
			translateX:0,
			initX:0,
			transitionDuration:0,
			touchObject:{},
		};

		this.TRANSITION_DURATION = 150;
		this.x = 0;
		Object.assign(this,SwipeCtrlEventHandler);
	}

	render() {
		let tranformStyle = {
			transform : 'translateX(' + this.state.translateX  + 'px' + ')',
			transitionTimingFunction : 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			transitionDuration : this.state.transitionDuration + 'ms'
		};
		return (
				<div style={tranformStyle} className={this.props.classes} onTouchStart={this.handleTouchStart.bind(this)} 
					onTouchMove={this.handleTouchMove.bind(this)} 
					onTouchEnd={this.handleTouchEnd.bind(this)} 
					onTouchCancel={this.handleTouchCancel.bind(this)} 
					className="slide-handle">
					{this.state.touchObject.curX}
					{this.props.children}
				</div>
		);
	}
}


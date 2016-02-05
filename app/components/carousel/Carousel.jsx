import React from 'react';
import './Carousel.css';

export default class Carousel extends React.Component {
	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		return (
			<div className="zl-carousel">
				{this.props.children}
			</div>
		);
	}
}
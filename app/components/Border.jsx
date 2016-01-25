import React from 'react';
import './Border.css';

export default class Border extends React.Component {
	render() {
		return <div className='border'>{this.props.children}</div>
	}
}
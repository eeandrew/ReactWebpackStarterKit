import React from 'react';
import './Hello.css';
export default class Hello extends React.Component {
	render() {
		return <h1 className="hello">{this.props.name}</h1>
	}
}
import React from 'react';

export default class AddTodo extends React.Component {
	onKeyUp(e) {
		if(e.which === 13){
			this.props.onAdd(this.refs.todo.value);	
			this.refs.todo.value = '';	
		}
	}
	render() {
		return <input ref="todo" onKeyUp={this.onKeyUp.bind(this)}></input>
	}
} 
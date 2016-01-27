import React from 'react';

export default class TodoItem extends React.Component {
	toggleTodo(){
		this.props.toggleTodo(Object.assign({},this.props.todo,{completed:!this.props.todo.completed}));
	}
	render() {
		return <li  style={{textDecoration : this.props.todo.completed?'line-through':''}}><input type="checkbox" onClick={this.toggleTodo.bind(this)} checked={this.props.todo.completed} />{this.props.todo.desc}</li>
	}
}
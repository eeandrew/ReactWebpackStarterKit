import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {
	toggleTodo(){
		this.props.toggleTodo(Object.assign({},this.props.todo,{completed:!this.props.todo.completed}));
	}
	removeTodo() {
		this.props.removeTodo(this.props.todo);
	}
	render() {
		return (
			<li className="todoitem" style={{textDecoration : this.props.todo.completed?'line-through':''}}>
			<input type="checkbox" onClick={this.toggleTodo.bind(this)} checked={this.props.todo.completed} />
			{this.props.todo.desc}
			<span className="delete-btn" onClick={this.removeTodo.bind(this)}>delete</span>
			</li>);
	}
}

TodoItem.propTypes = {
	toggleTodo:React.PropTypes.func.isRequired,
	todo : React.PropTypes.object.isRequired
};

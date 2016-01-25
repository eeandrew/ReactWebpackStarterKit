import React from 'react';
import Border from './Border.jsx';
import AddTodo from './AddTodo.jsx'

export default class Todo extends React.Component {
	constructor() {
		super();
		this.state = {todos:[{desc:'hello1'},{desc:'hello2'}]}
	}

	addTodo(todo) {
		this.setState({todos:[...this.state.todos,{desc:todo}]});
	}

	todos() {
		return this.state.todos.map(function(todo){
			return <li>{todo.desc}</li>;	
		})
	}
	render() {
		return <Border>{this.todos()} <AddTodo onAdd={this.addTodo.bind(this)}/></Border>;
	}
}
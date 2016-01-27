import React from 'react';
import Border from './Border.jsx';
import AddTodo from './AddTodo.jsx';
import TodoItem from './TodoItem.jsx';

export default class Todo extends React.Component {
	constructor() {
		super();
		this.state = {todos:[{desc:'hello1',completed:false},{desc:'hello2',completed:false}]}
	}

	addTodo(todo) {
		this.setState({todos:[...this.state.todos,{desc:todo}]});
	}

	completeTodo(todo) {
		let i=0;
		let index = 0;
		for(;i<this.state.todos.length;i++) {
			if(this.state.todos[i].desc === todo.desc){
				index = i;
			}
		}
		this.setState({todos:[...this.state.todos.slice(0,index),todo,...this.state.todos.slice(index+1)]});
	}

	todos() {
		var self = this;
		return this.state.todos.map(function(todo){
			return <TodoItem todo={todo} toggleTodo={self.completeTodo.bind(self)}/>;	
		})
	}
	render() {
		return <Border>{this.todos()} <AddTodo onAdd={this.addTodo.bind(this)}/></Border>;
	}
}
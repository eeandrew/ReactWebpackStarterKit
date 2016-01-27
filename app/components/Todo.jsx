import React from 'react';
import Border from './Border.jsx';
import AddTodo from './AddTodo.jsx';
import TodoItem from './TodoItem.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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

	removeTodo(todo) {
		let i=0;
		let index = 0;
		for(;i<this.state.todos.length;i++) {
			if(this.state.todos[i].desc === todo.desc){
				index = i;
			}
		}
		this.setState({todos:[...this.state.todos.slice(0,index),...this.state.todos.slice(index+1)]});
	}

	todos() {
		var self = this;
		return this.state.todos.map(function(todo){
			return <TodoItem todo={todo} toggleTodo={self.completeTodo.bind(self)} removeTodo={self.removeTodo.bind(self)}/>;	
		})
	}
	render() {
		return (
			<Border>
				<ReactCSSTransitionGroup transitionName="todo" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
					{this.todos()} 
				</ReactCSSTransitionGroup>
				<AddTodo onAdd={this.addTodo.bind(this)}/>
			</Border>
		);
	}
}
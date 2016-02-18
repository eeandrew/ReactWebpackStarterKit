import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/Hello.jsx';
import World from './components/World.jsx';
import Timer from './components/Timer.jsx';
import Counter from './components/Counter.jsx';
import Todo from './components/Todo.jsx';
import SwipeCtrl from './components/SwipeCtrl.jsx';
import Carousel from './components/carousel/Carousel.jsx';
import Alert from './components/Alert.jsx';
import SimpleRemove from './components/SimpleRemove.jsx';
import AutoSize from './components/AutoSize.jsx';
import RunningNumber from './components/RunningNumber.jsx';
import ProgressBar from './components/ProgressBar.jsx'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			numberValue:0
		};
	}

	handleValueChange(e) {
		let value = parseFloat(e.target.value);
		this.setState({
			numberValue : value
		});
	}

	render() {
		return (<div>
				<input style={{marginBottom:'30px'}} onChange={this.handleValueChange.bind(this)}/>
				<div>
					<div style={{width:'82%',float:'left'}}>
						<ProgressBar progress={this.state.numberValue}/>
					</div>
					<div style={{width:'18%',color:'#FFF',textAlign:'right',float:'right',marginTop:'-13px'}}>
						<RunningNumber rnStyle={{fontSize:'25px',fontWeight:'100'}} value={this.state.numberValue} format={'(ddd%)'}/>
					</div>
				</div>	
			</div>)
	}
}

function main() {
	ReactDom.render(<App/>,document.getElementById('app'));
}

main();
import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './components/TodoItem.js'
import './index.css'


class Hello extends React.Component{
	render(){
		return (<h1>Hello</h1>)
	}
}

class ReactT extends React.Component{
	constructor(){
		super();
		this.name = "Indrajit";
	}
	render(){
		return (<div className='foo'><h1>React</h1><h2>Start</h2>{this.name}</div>)
	}
}

class HelloReact extends React.Component{
	render(){
		return (<section><Hello /><ReactT /></section>)
	}
}
ReactDOM.render(<HelloReact />, document.getElementById('root')); 

class TodoList extends React.Component{

	constructor(){
	super();

	this.state = {
		infos:[{cnt:"India",status:true,cl:"dash"},
		{cnt:"France",status:false,cl:"dash"},
		{cnt:"Usa",status:false,cl:"dash"}]
	}

	this.changeState = this.changeState.bind(this);
	}

	render(){
		return(
			<ul>
				{
					this.state.infos.map((info,i) => {
						return <TodoItem clickHandler={this.changeState} index={i} data={info}/>
					})
				}
			</ul>
		)
	}
	
	changeState(index){
		var infos = this.state.infos;
		var info = this.state.infos[index];
		info.cl = (info.cl == "dash")? " ":"dash";

		console.log(index);
		this.setState({ infos:infos });
	}
}


ReactDOM.render(<TodoList />, document.getElementById('root'));

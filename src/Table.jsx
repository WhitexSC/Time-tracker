import React, {Component} from 'react';
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import ReactDOM from 'react-dom';
import { Table } from 'reactstrap';

export default class Table extends Component{
	// constructor(props){
	// 	super(props);
	// 	this.state = {};
	// 	this.test = this.test.bind(this)
	// }

	componentWillUpdate(nextProps, nextState){
	}
	// conponentDidMount(){
	// 	console.log(this.props)
		
	// }

	// bakeTable = () => {

	// 	this.setState({firstWeek : listId})
	// 	console.log(this.state.firstWeek)
	// 	return listId
	// }

	// test = Object.keys(this.props.firstWeek).map( (data, index)=>{
	// 	return (
	// 		<thead key={index}>
	// 		<tr>
	// 			<th>{data.id}</th>		
	// 			<th>{data.sum}</th>		
	// 			<th>{data.project_id}</th>
	// 		</tr>	
	// 	</thead>)
	// } )
	test(){
		return(
			<thead>
			<tr>
				<th>'Привет000'</th>		
				<th>Привет0</th>		
				<th>Привет</th>
			</tr>	
		</thead>
		)
	}
// const listId = this.props.firstWeek.map( (data, index) =>{
// 	return(
// 	)	
// // })//
// 			<Table>
// 				{this.test.bind(this)}
// 			</Table>
	render(){
		return(
			<div>
 			<Table>
 				{this.test.bind(this)}
			</Table>
			</div>
		)
	}
}
//Table.defaultProps = { firstWeek: [], };

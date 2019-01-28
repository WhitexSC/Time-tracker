import React, {Component} from 'react';
import { Table } from 'reactstrap';

export default class Middleware extends Component{
	state ={};

	sortByName = (e, index) =>{
		let user_id = this.props.bigInfo[index].user.id;
		this.props.handleSortByName(user_id);
	}

	sortBySum = (e, index) =>{
		let sum = this.props.bigInfo[index].sum;
		this.props.handleSortBySum(sum);
	}
	sortByProjName = (e, index) =>{
		console.log()
		let project_id = this.props.bigInfo[index].project.id;
		this.props.handleSortByProjName(project_id);
	}
	sortNyEntry = (e, index) =>{
		let entry_id = (this.props.bigInfo[index].time_entry_type === null) ? 'Null' : this.props.bigInfo[index].time_entry_type.id;
		this.props.handleSortNyEntry(entry_id);

	}
	renderTable = () => {
		let data = this.props.bigInfo.map((data, index) =>{
		let entry = (data.time_entry_type === null) ? 'Null' : data.time_entry_type.name;
		return (
			<tr key={index}>
				<th>{index+1}</th>
				<th><a href="#" onClick={e => this.sortByName(e, index)}>{data.user.full_name}</a></th>
				<th>{data.date}</th>
				<th><a href="#" onClick={e =>this.sortBySum(e, index)}>{data.sum/60/60}</a></th>
				<th><a href="#" onClick={e =>this.sortByProjName(e, index)}>{data.project.full_name}</a></th>
				{/*<th><a href="#" onClick={e =>this.sortNyEntry(e, index)}>{entry}</a></th>*/}
				<th>{entry}</th>
			</tr>
		)
	})
		return data
	}
	render(){
		return(
	      <Table className="text-center">
	        <thead>
	          <tr>
	            <th>#</th>
	            <th>First Name</th>
	            <th>Last Name</th>
	            <th>Working Hours</th>
	            <th>Project name</th>
	            <th>Overtime</th>
	          </tr>
	        </thead>
	        <tbody>
	        	{this.renderTable()}
	        </tbody>
	      </Table>			
			
		)
	}
}

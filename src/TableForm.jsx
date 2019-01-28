import React, {Component} from 'react';

export default class TableForm extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	// componentWillUpdate(nextProps, nextState){
	// }
	// conponentDidMount(){
	// 	console.log('TableForm')
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
				{this.props.bigInfo.map((data, index)=> <tr key={index}><th>data.sum</th></tr>)}
			</div>
		)
	}
}

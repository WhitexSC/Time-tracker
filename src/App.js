import React, { Component } from 'react';
import Middleware from './Middleware'
import 'bootstrap/dist/css/bootstrap.css';
import PaginationWrapper from './PaginationWrapper'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bigInfo: [],
      page: 1,
      activePage: null,
      sort:{
        name : null,
        projectName: null,
        sum: null,
        entry: null
      },
      pagination_count: null
    }
      this.handlePageChange = this.handlePageChange.bind(this)
  }

  handleSortByName = (newSortByName) =>{
    console.log('got handleSortByName!' + newSortByName)
    this.setState({
      sort: {
        ...this.state.sort,
        name: newSortByName,
      },
    });
  }

  handleSortBySum = (newSortBySum) =>{
    console.log('got newSortBySum!' + newSortBySum)
    this.setState({
      sort: {
        ...this.state.sort,
        sum: newSortBySum,
      },
    });
  }
  handleSortByProjName = (newSortByProjName) =>{
    console.log('got newSortByProjName!' + newSortByProjName)
    this.setState({
      sort: {
        ...this.state.sort,
        projectName: newSortByProjName,
      },
    });
    console.log(this.state.sort.projectName)
  }
  handleSortNyEntry = (newSortNyEntry) =>{
    console.log('got newSortNyEntry!' + newSortNyEntry)
    this.setState({
      sort: {
        ...this.state.sort,
        entry: newSortNyEntry,
      },
    });
  }
  componentDidMount(){
    let pages = this.state.page === null ? '' : this.state.page; 
    console.log(`pages : ${pages}`)

    fetch(`https://app.apacta.com/api/v1/time_entries?page=${pages}&api_key=dd3d895b-69f1-41fe-8249-3f46bbf11edf`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({bigInfo: []})
        console.log(data.pagination)
        this.setState({pagination_count: data.pagination.count});
        this.setState({activePage : data.pagination.page_count});
        this.setState({bigInfo : data.data});
      });
  }
  componentWillUpdate(nextProps, nextState){
    let pages = nextState.page ? nextState.page : this.state.page;
    let name = (this.state.sort.name === null) ? '' : '&user_id='+this.state.sort.name;
    let projectName = (this.state.sort.projectName === null) ? '' : '&project_id='+this.state.sort.projectName;
    let sum = (this.state.sort.sum === null) ? '' : '&lt_sum='+this.state.sort.sum;
    let entry = (this.state.sort.entry === null) ? ''  : '&gt_to_time='+this.state.sort.entry;
    console.log(`componentWillUpdate... name: ${name} projectName: ${projectName} sum: ${sum} entry: ${entry}`)
    let url =`https://app.apacta.com/api/v1/time_entries?page=${pages}&api_key=dd3d895b-69f1-41fe-8249-3f46bbf11edf${name}${projectName}${sum}${entry}`
    console.log(url)
    if(this.state.page !== nextState.page || this.state.sort !== nextState.sort){
      // let url = `https://app.apacta.com/api/v1/time_entries?page=${pages}&api_key=dd3d895b-69f1-41fe-8249-3f46bbf11edf${name}${projectName}${sum}${entry}`
      // console.log(url)
     fetch(`https://app.apacta.com/api/v1/time_entries?page=${pages}&api_key=dd3d895b-69f1-41fe-8249-3f46bbf11edf${name}${projectName}${sum}${entry}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({bigInfo: []})
        this.setState({activePage : data.pagination.page_count})
        this.setState({bigInfo : data.data});
        this.setState({pagination_count: data.pagination.count});
      });     
    }    
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    
    this.setState({page: pageNumber});
    console.log(this.state.page)
  }
  render() {
    return (
      <div className="container">
        {this.state.bigInfo.length > 0 
          ? <Middleware 
              bigInfo={this.state.bigInfo}
              handleSortByName={this.handleSortByName}
              handleSortBySum={this.handleSortBySum}
              handleSortByProjName={this.handleSortByProjName}
              handleSortNyEntry={this.handleSortNyEntry}
              /> 
          : 'not yet....'}
          <nav aria-label="navigation" className="justify-content-center" id="navigation">
            <PaginationWrapper
              activePage={this.state.page}
              itemsCountPerPage={20}
              totalItemsCount={this.state.pagination_count}
              pageRangeDisplayed={3}
              onChange={this.handlePageChange}
              innerClass={'pagination text-center'}
              itemClass={'page-item'}
              linkClass={'page-link'}
            />
            </nav>
            
      </div>
    );
  }
}

export default App;

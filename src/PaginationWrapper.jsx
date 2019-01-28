import Pagination from "react-js-pagination";
import React, {Component} from 'react';

export default class PaginationWrapper extends Pagination{
	render() {
	    const pages = this.buildPages();
	    return <ul id='aas' className={this.props.innerClass}>{pages}</ul>;
  }
}

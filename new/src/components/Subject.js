import React, { Component } from 'react';

class Subject extends Component{
    render () {
      return (
        <header>
            <h1><a href="" onClick={function(e){
              e.preventDefault();
              // onChangePage 함수를 호출한다. 
              this.props.onChangePage();
            }.bind(this)}>{this.props.title}</a></h1>
            {this.props.sub}
        </header>
      );
    }
  }

export default Subject;
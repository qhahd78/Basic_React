import React, { Component } from 'react';

class Control extends Component{
    render () {
      return (
        <ul>
          <li><a href="/create" onCLick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>

          <li><a href="/update" onCLick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          
          <li><input onClick={function(e){
            e.preventDefault ();
            this.props.onChangeMode('delete');
          }.bind(this)} type="button" value="delete"></input></li>
        </ul>
      );
    }
  }

export default Control;
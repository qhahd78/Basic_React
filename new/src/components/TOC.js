import React, { Component } from 'react';

class TOC extends Component{
    render (){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
          <li key={data[i].id}>
            <a
              href={"/content/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                //a 태그
                // e.target.dataset.id
                // debugger;
                e.preventDefault();
                //App.js 의 함수 실행
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
            >{data[i].title}</a>
          </li>
        );
        i = i + 1;
      }
      return(
        <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
  }

//TOC.js 를 가져다 사용할 수 있도록 함. 
export default TOC;
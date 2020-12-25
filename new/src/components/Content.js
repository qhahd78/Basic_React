//컴포넌트 안에서 전달받은 Props 는 바꿀 수 없다. 
//바꿀 수 있는건 State. 바꿀 수 없는건 Props. 

//상위 component=> 하위 component == props 이용
//하위 component=> 상위 component == event 이용

//하위 conponent  event 가 트리거됐을 때, state 가 호출되는 것을 이용, 
//상위 conponent 수정. 
import React, { Component } from 'react';

class Content extends Component{
    render (){
      return (
        <article>
              <h2>{this.props.title}</h2>
              {this.props.desc}
        </article>
      );
    }
  }

export default Content;
//컴포넌트 안에서 전달받은 Props 는 바꿀 수 없다. 
//바꿀 수 있는건 State. 바꿀 수 없는건 Props. 

//상위 component=> 하위 component == props 이용
//하위 component=> 상위 component == event 이용

//하위 conponent  event 가 트리거됐을 때, state 가 호출되는 것을 이용, 
//상위 conponent 수정. 
import React, { Component } from 'react';

class CreateContent extends Component{
    render (){
      return (
        <article>
              <h2>Create</h2>
              {/* //submit 버튼 누를 시 action 에 있는 사이트로 넘어감.  */}
              {/* preventDefault 때문에 다음 페이지로 넘어가지 않음  */}
              <form action="/create_process" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  //onSubmit _title, _desc 로 전달됨 
                  this.props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value
                  );
                }.bind(this)}
              >
                <p><input type="text" name="title" 
                placeholder="title"></input></p>
                <p>
                  <textarea name="desc" placeholder="description"></textarea>
                </p>
                <p>
                  <input type="submit"></input>
                </p>
              </form>
        </article>
      );
    }
  }

export default CreateContent;
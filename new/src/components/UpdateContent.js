//컴포넌트 안에서 전달받은 Props 는 바꿀 수 없다. 
//바꿀 수 있는건 State. 바꿀 수 없는건 Props. 

//상위 component=> 하위 component == props 이용
//하위 component=> 상위 component == event 이용

//하위 conponent  event 가 트리거됐을 때, state 가 호출되는 것을 이용, 
//상위 conponent 수정. 
import React, { Component } from 'react';

class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state = {
        title:this.props.data.title,
        desc:this.props.data.desc
      }
      //바인드 된 걸로 교체 해준다. 
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value});
    }
    render (){
      console.log(this.props.data);
      console.log('UpdateContent render');
      return (
        <article>
              <h2>Update</h2>
              {/* //submit 버튼 누를 시 action 에 있는 사이트로 넘어감.  */}
              {/* preventDefault 때문에 다음 페이지로 넘어가지 않음  */}
              <form action="/create_process" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  //onSubmit _title, _desc 로 전달됨 
                  this.props.onSubmit(
                    this.state.id,
                    this.state.title,
                    this.state.desc
                  );
                }.bind(this)}
              >
                <input type="hidden" name="id" value="{this.state.id}"></input>
                <p>
                  <input 
                    type="text" 
                    name="title" 
                    placeholder="title"
                    value="{this.state.data.title}"
                    onChange="{this.inputFormHandler}"
                  ></input>
                </p>
                
                <p>
                  <textarea 
                    onChange="{this.inputFormHandler}"
                    name="desc" 
                    placeholder="description"
                    value="{this.state.desc}">

                  </textarea>
                </p>
                <p>
                  <input type="submit"></input>
                </p>
              </form>
        </article>
      );
  }
}

export default UpdateContent;
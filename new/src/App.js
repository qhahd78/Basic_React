import React, { Component } from 'react';
import './App.css';
//TOC 가져오기. 아래에 클래스 정의 안 해도 작동 됨. 
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
// Component 가 로드 될 때 css 도 함께 로드 . 
// App 이라고 하는 COmponent 의 디자인을 App 에 함께 넣는다. 


// Component의 클래스식 선언 
// Class 키워드 필요
// Component로 상속 받음. 
// render(메소드) 필요.`
//return 안에는 하나의 최상위 태그가 있어야함. 


//내부적으로 이용할 상태는 state. 
//상위 컴포넌트의 state 값을 하위 props 값으로 전달. 
//부모(App) state 라고 하는 내부 정보. 
class App extends Component {
//state 선언 전에 넣어주어야 함. (constructor, super)
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      subject:{title:'WEB', sub: 'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React'},
      //여러개라서 배열 형태로 state 생성
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
//props나 state 값이 바뀌면, 해당되는 render 함수가 호출된다.
//=props와 state 값이 바뀌면, 화면이 다시 그려진다.  
  render () {
    var _title, _desc = null;
    //welcome 일 경우 아래 코드 실행. welcome 이므로 아래 코드가 실행된다. 
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      //read 일 경우 아래 코드 실행. 
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;

    }
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title}
        sub={this.state.subject.sub}>
        </Subject>
        <Subject title="React" sub="For UI"></Subject>
{/* // 아래처럼 자식한테 전달할 때 props 형태로 전달.  props 이름: data*/}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
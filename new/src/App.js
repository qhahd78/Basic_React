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
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub: 'World Wide Web!'}
    }
  }
  render () {
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title}
        sub={this.state.subject.sub}>
        </Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
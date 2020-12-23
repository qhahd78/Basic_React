//커밋이 되나 ?
//커밋이 되는지 안 되는지 ..

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
//constructor 에서는 편하게 state 값들을 바꾸어도 된다. 
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      //기본으로 2번이 선택. 
      selected_content_id:2,
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
      var i = 0;
      while(i < this.state.contents.length){
        //해당 번호와 같으면, 그 해당 번호의 내용을 출력. 
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          // Subject (Web) 을 클릭하면, mode가 welcome 으로 변경되고, 이에 따라 html 내용도 바뀐다. 
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        {/* <header> 
            <h1><a href="/" onClick={function(e){
              console.log(e);
              e.preventDefault();
              e 태그의 기본적인 동작을 막는다. 페이지의 리로드를 막음. 
              debugger=실행을 멈춤.
              this.state.mode = 'welcome';
              클릭시 state mode 를 welcome 으로 변경. --에러 발생, state 변경이 안 된다. 
              this.setState({
                 mode: 'welcome'
              });
              setState로 state 값을 바꿔준다. 
              함수의 형태로 state 값 변경.
              setState 함수 안에 바꾸고 싶은 것을 객체 형태로 넣어서 바꿈. 
              state 몰래 바꾸는 거라고 생각하면 된다 .
            }.bind(this)}>{this.state.subject.title}</a></h1>
            이 앱의 객체를 함수랑 엮어준다.
            bind=엮는다. 
            bind 추가-- this에 아무 값도 없었는데 이 컴포넌트를 this 로 지정해준다.
            {this.state.subject.sub}
        </header>
아래처럼 자식한테 전달할 때 props 형태로 전달.  props 이름: data */}
        <TOC
        //이벤트 생성 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              //Number 함수로 id 값(문자로 넘어왔던 것)을 숫자로 변경 
              selected_content_id:Number(id)
            });
        //state 변경 
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
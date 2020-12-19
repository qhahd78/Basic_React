import React, { Component } from 'react';
import './App.css';
// Component 가 로드 될 때 css 도 함께 로드 . 
// App 이라고 하는 COmponent 의 디자인을 App 에 함께 넣는다. 


// Component의 클래스식 선언 
// Class 키워드 필요
// Component로 상속 받음. 
// render(메소드) 필요. 
//return 안에는 하나의 최상위 태그가 있어야함. 



class TOC extends Component{
  render (){
    return(
      <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
            </ul>
        </nav>
    );
  }
}

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

class Subject extends Component{
  render () {
    return (
      <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
      </header>
    );
  }
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
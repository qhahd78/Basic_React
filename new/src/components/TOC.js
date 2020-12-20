import React, { Component } from 'react';

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

//TOC.js 를 가져다 사용할 수 있도록 함. 
export default TOC;
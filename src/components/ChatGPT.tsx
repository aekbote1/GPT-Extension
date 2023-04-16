import classNames from 'classnames';
import React, { ReactElement, ReactNode, useState } from 'react';
import './menu.css';
import Button from './Button';

function templateGPTFull() {
  return(
    
      <div className='contentArea'>
        <h1>This is the ChatGPT Policy Reader</h1>
        <br></br>
        <h2>data goes here</h2>
      </div>
    
  );
}
function templateGPTEmpty() {
  return(
    
      <div className='contentArea'>
      </div>
    
  );
}
function templateGPT(showChatGPT) {
  
    if(showChatGPT){
      return templateGPTFull();
    }else{
      return templateGPTEmpty()  
    }
  
}

export default function ChatGPT(showChatGPT) {
  return templateGPT(showChatGPT);
}

import classNames from 'classnames';
import React, { ReactElement, ReactNode } from 'react';
import aboutuslogo from './../aboutus.jpg';
import './menu.css';
import Button from './Button';



function templateGPT() {
  return(
    <div className='contentArea'>
    <h1>This is the ChatGPT Policy Reader</h1>
    <br></br>
    <h2>data goes here</h2>
    </div>
  );
}

export default function ChatGPT() {
  return (
    templateGPT()
  );
}

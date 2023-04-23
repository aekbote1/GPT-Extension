import classNames from 'classnames';
import React, { ReactElement, ReactNode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import aboutuslogo from './../aboutus.jpg';
import './menu.css';
import Button from './Button';
//import ChatGPT from './ChatGPT';
//import VisitUs from './VisitUs';
import ContentArea from './ContentArea';


function Menu1({
  children,
  isActive,
  onShow
}) {
  return (
    <Button active={true} onClick={() => onShow()} className="py-2">
      <img className="menu-img" 
        src="https://clipartix.com/wp-content/uploads/2016/07/Eyes-eye-clip-art-black-and-white-free-clipart-images-6.png"
        alt="ChatGPT Logo"
        id="col1"
      />
    </Button>
  );
}

function Menu2({
  children,
  isActive,
  onShow
}) {
  return (
    <Button active={true} onClick={() => onShow()} className="py-2">
      <h1 id="col2">Visit Us!</h1>
    </Button>

  );
}

export default function Menus() {
  //const [showChatGPT, setShowChatGPT] = useState(false);
  //const [showVisitUs, setShowVisitUs] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <section>
      <div>
        <div className='row'>
          <div className='col'>
            <Menu1 
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}>
            </Menu1>
          </div>
          <div className='col'>
          <Menu2 
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}>
            </Menu2>
          </div>
        </div>
      </div> 
    </section>
    <ContentArea />
    <div id="rootOne"></div>
    <div id="rootTwo"></div>
    </div>
  );
}

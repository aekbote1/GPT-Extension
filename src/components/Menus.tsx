import classNames from 'classnames';
import React, { ReactElement, ReactNode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import aboutuslogo from './../aboutus.jpg';
import './menu.css';
import Button from './Button';
import ChatGPT from './ChatGPT';
import VisitUs from './VisitUs';

function showMenus(showChatGPT, showVisitUs){

      onMenuOneClick(showChatGPT)
    

      onMenuTwoClick(showVisitUs)
    
  
}
function onMenuOneClick(showChatGPT){
  console.log("hidden::")
  console.log("from menu1");
  const root = createRoot(
    document.getElementById('rootOne')
  )
  root.render(<ChatGPT 
                showChatGPT
              >
              </ChatGPT>);
}

function onMenuTwoClick(showVisitUs){
  console.log("from menu2");
  const root = createRoot(
    document.getElementById('rootTwo')
  );
  root.render(<VisitUs
                showVisitUs
              >
              </VisitUs>);
}

function Menu1({
  showChatGPT,
  showVisitUs,
  onShow
}) {
  return (
    <Button active={true} showChatGPT={showChatGPT} showVisitUs={showVisitUs} onClick={() => onShow({showChatGPT}, {showVisitUs})} className="py-2">
      <img className="menu-img" 
        src="https://clipartix.com/wp-content/uploads/2016/07/Eyes-eye-clip-art-black-and-white-free-clipart-images-6.png"
        alt="ChatGPT Logo"
        id="col1"
      />
    </Button>
  );
}

function Menu2({
  showChatGPT,
  showVisitUs,
  onShow
}) {
  return (
    <Button active={true} showChatGPT={showChatGPT} showVisitUs={showVisitUs} onClick={() => onShow({showChatGPT}, {showVisitUs})} className="py-2">
      <h1 id="col2">Visit Us!</h1>
    </Button>

  );
}

export default function Menus() {
  const [showChatGPT, setShowChatGPT] = useState(false);
  const [showVisitUs, setShowVisitUs] = useState(false);
  return (
    <div>
      <section>
      <div>
        <div className='row'>
          <div className='col'>
            <Menu1 
                showChatGPT={true}
                showVisitUs={false}
                onShow={() => showMenus({true}, {false})}>
            </Menu1>
          </div>
          <div className='col'>
          <Menu2 
                showChatGPT={false}
                showVisitUs={true}
                onShow={() => showMenus({false}, {true})}>
            </Menu2>
          </div>
        </div>
      </div> 
    </section>
    <div id="rootOne"></div>
    <div id="rootTwo"></div>
    </div>
  );
}

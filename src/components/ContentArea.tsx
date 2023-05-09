import classNames from 'classnames';
import React, { ReactElement, ReactNode, useState } from 'react';
import './menu.css';
import Button from './Button';
import { URLS } from './../const';
import logo from '../images/logo.png'

function onShow(){

}

export default function ContentArea(
  frameEnabled,
  tabIndex
) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log('from content panel current url:::' + location.href);

  return (
    <>
      <section>
        <div>
          <div className='row'>
            <div className='col'>
              <Button active={true} onClick={() => setActiveIndex(0)} className="py-2">
                <img className="menu-img" 
                  src={logo}
                  alt="ChatGPT Logo"
                  id="col1"
                />
              </Button>
            </div>
            <div className='col'>
              <Button active={true} onClick={() => setActiveIndex(1)} className="py-2">
                <h1 id="col2">Visit Us!</h1>
              </Button>
            </div>
          </div>
        </div> 
      </section>
      <Panel
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <div className='contentArea'>
          <iframe
            className={classNames('absolute w-full h-full border-none ease-linear overflow-hidden', {
              'opacity-0': !frameEnabled,
              '-z-10': !frameEnabled,
            })}
            //localhost is where it will be hosted until final
            src={("https://testwebapp1.herokuapp.com" + "?" + "currentURL=" + location.href)}
          />  
        </div>
      </Panel>
      <Panel
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <div className='contentArea'>
        <iframe
            className={classNames('absolute w-full h-full border-none ease-linear overflow-hidden', {
              'opacity-0': !frameEnabled,
              '-z-10': !frameEnabled,
            })}
            //localhost is where it will be hosted until final
            src={("https://testwebapp1.herokuapp.com/visitus.html" + "?" + "currentURL=" + location.href)}
          />  
        </div>
    </Panel>
    </>
  );
}
function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      {isActive ? (
        <div>
          <h3>{title}</h3>
          <p>{children}</p>
        </div>
        
      ) : (
        <div />
      )}
    </section>
  );
}
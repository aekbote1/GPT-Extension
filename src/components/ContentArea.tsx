import classNames from 'classnames';
import React, { ReactElement, ReactNode, useState } from 'react';
import './menu.css';
import Button from './Button';

function onShow(){

}

export default function ContentArea() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <section>
        <div>
          <div className='row'>
            <div className='col'>
              <Button active={true} onClick={() => setActiveIndex(0)} className="py-2">
                <img className="menu-img" 
                  src="https://clipartix.com/wp-content/uploads/2016/07/Eyes-eye-clip-art-black-and-white-free-clipart-images-6.png"
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
      <h2>Content Area</h2>
      <Panel
        title="ChatGPT"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <div className='contentArea'>
        <h1>This is the ChatGPT Policy Reader</h1>
        <br></br>
        <h2>data goes here</h2>
      </div>
      </Panel>
      <Panel
        title="Visit Us"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <div className='contentArea'>
        <h1>For more information...</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='button'>
          <a href='https://www.apple.com/store?afid=p238%7CseIEs444j-dc_mtid_1870765e38482_pcrid_649686730713_pgrid_13945964887_pntwk_g_pchan__pexid__&cid=aos-us-kwgo-brand-apple--slid---product-'>Visit Us!</a>
        </div>
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
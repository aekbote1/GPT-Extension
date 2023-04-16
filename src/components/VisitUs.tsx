import classNames from 'classnames';
import React, { ReactElement, ReactNode } from 'react';
import './menu.css';
import Button from './Button';


function visitUsEmpty() {
  return(
    
      <div className='contentArea'>
      </div>
    
  );
}


function visitUsFull() {
  return(
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
  );
}

export default function VisitUs(showVisitUs) {
  if(showVisitUs){
    return visitUsFull();
  }else{
    return visitUsEmpty()  
  }
   
 
}

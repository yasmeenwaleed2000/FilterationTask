import React from 'react';
import style from './Home.module.css';



export default function Home() {
  return (
   <>
<section className=''>
<div className={`${style.layer}`}>
  <div className='d-flex justify-content-center mt-5'>
    <div>
      <li className= {`${style.icon}  fa-solid fa-truck-fast mt-5`} ></li>
    </div>
    <div className='mx-3'>
<h5 className= {`${style.icon}`}>Round Rock</h5>
<p className= {`${style.icon}`}>Trush Hauling</p>
    </div>
  </div>

  <div className='w-50  text-center mt-5 m-auto'>
  <button type="button" className={`${style.btnexpert} btn btn-primary btn-sm mt-5 rounded-pill`}>Experts</button>
    <h1 className={`${style.loremh1}`}>Lorem</h1>
    <h1 className={`${style.loremh1}`}>Lorem lorem</h1>
    <p className={`${style.loremp1}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
    <button type="button" className={`${style.btn2} btn btn-secondary rounded-pill mb-5`}>Help Me</button>
  </div>
  </div>


  
</section>


 
   

   </>
  )
}

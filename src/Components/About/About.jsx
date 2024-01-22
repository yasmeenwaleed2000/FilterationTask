import React from 'react'
import style from './About.module.css';
import about1 from '../../img/about1.jpg';


export default function About() {
  return (
    <>

   




     <div className={`${style.layerback} mt-5`}>
<div className='row '>
  <div className='col-md-4 '>
    <div className=' mt-3  m-auto w-75'>
    <h1 className={`${style.hh2}`}>About Us</h1>
    <p className='text-white mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>

    <img src={about1} className='img-fluid mt-3 ' />
    </div>
  </div>
<div className='col-md-8 w-50 m-auto'>
  <div>
    <h1 className={`${style.hh1}`}>Where</h1>
    <p className='text-white mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

  </div>
</div>

</div>
<div className='text-center'>
    <button type="button" className={`${style.bbtn} btn btn-primary btn-lg rounded-pill `} >Help Me</button>
    </div>
  </div>
    </>
  )
}

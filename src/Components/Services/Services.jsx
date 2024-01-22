import React from 'react';
import Style from './Services.module.css'
import serv1 from '../../img/serv1.jpg';
import serv2 from '../../img/serv2.jpg';
import serv3 from '../../img/serv3.jpg';

export default function Services() {
  return (
    <>

<div className='mt-5'>
        <p className={`${Style.hh1} text-center`}>Services</p>
      
     <div className='row mt-5'>
    <div className='col-md-4'>
    <div>
  <img src={serv1} className="card-img-top " />
  <div className="card-body shadow-lg p-3 mb-5 bg-body rounded">
    <h5 className={`${Style.test} mt-3 `} >Lorem Ipsum</h5>
    <p className={`${Style.cardtext} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
   
  </div>
</div>

    </div>

    <div className='col-md-4'>
    <div >
  <img src={serv2} className="card-img-top " />
  <div className="card-body shadow-lg p-3 mb-5 bg-body rounded">
    <h5 className={`${Style.test} mt-3 `} >Lorem Ipsum</h5>
    <p className={`${Style.cardtext} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
   
  </div>
</div>
    </div>

    <div className='col-md-4'>
    <div >
  <img src={serv3} className="card-img-top " />
  <div className="card-body shadow-lg p-3 mb-5 bg-body rounded">
    <h5 className={`${Style.test} mt-3 `} >Lorem Ipsum</h5>
    <p className={`${Style.cardtext} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
   
  </div>
</div>

    </div>
    <div className='text-center'>
    <button type="button" className={`${Style.bbtn} btn btn-primary btn-lg rounded-pill `} >Help Me</button>
    </div>
    </div>
   </div>
    </>
  )
}

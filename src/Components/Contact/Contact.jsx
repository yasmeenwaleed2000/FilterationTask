import React, { useState } from 'react';
import style from './Contact.module.css';
import axios from 'axios'

export default function Contact() {
  let [user,setUser]=useState({
     
      "email":'',
      "phone":'',
      "name":''
  });

  let submitFormData=async(e)=>{
    e.preventDefault();
    let {data}=await axios.post('http://upskilling-egypt.com:3001/contact',user);
    alert(data.message)

  };

  let getInputValue=(e)=>{
    let myUser={...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser);
    console.log(myUser)

  }
  return (
    <>



    <section className='shadow-lg p-3 mb-5 bg-body rounded mt-5'>
      <div className='   '>
        <p className={`${style.hh1} text-center`}>Contact Us</p>
      </div>
    <div className='row'>
      <div className='col-md-6 '>
    <form  className='w-50  m-auto'>
<div className='input-data my-2'>
  <input onChange={getInputValue}  type="email" className={`${style.backroundcolor} form-control rounded-pill border-0`} name='email' placeholder='Email' />
</div>

<div className='input-data my-2'>
  <input onChange={getInputValue}  type="number" className={`${style.backroundcolor} form-control rounded-pill border-0`} name='phone' placeholder='Phone' />
</div>


<div className='input-data my-2'>
  <input onChange={getInputValue} type="text" className={`${style.backroundcolor} form-control rounded-pill border-0`} name='name' placeholder='Name' />
</div>
<div className=' d-flex justify-content-center'>
<button onClick={submitFormData} type="button" className={`${style.btnmod} btn btn-outline-info rounded-pill`}>Send</button>
    </div>
    
    </form>



    
    </div>
    
    <div className='col-md-6 text-align-center mt-5'>
      <div className='d-flex '>
      <i className={`${style.icon} fa-solid fa-envelope mt-1 `}></i>
      <p className='mx-3'>upskilling.eg1@gmail.com</p>
      </div>

      <div className='d-flex'>
      <i className={`${style.icon} fa-solid fa-phone mt-1 `}></i>
      <p className='mx-3'>+20 115 493 2137</p>
      </div>
    </div>
    </div>
    </section>
   
    </>
  )
}

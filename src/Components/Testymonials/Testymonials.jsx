import React, { useEffect } from 'react';
import style from './Testymonials.module.css';
import testmoia from '../../img/testymonia.jpg';
import axios from 'axios';

export default function Testymonials() {
useEffect(()=>{
  
},[]);

  let getTestymonia= async()=>{
    let {data}=await axios.get('https://reqres.in/api/users?page=1');
    console.log(data);
  }
  return (
    <>
    <section className='mt-5'>
    <div className='   '>
        <p className={`${style.hh1} text-center`}>Testymonials</p>
      </div>

      <div className='row g-5'>
        <div className= {`${style.divv} col-xl-6 shadow `}>
    <div className='d-flex'>
      <div className='img-fluid mx-3 mt-5'>
      <img src={testmoia} className={`${style.imgg} `} />
      </div>
      <div className='mt-5'>
        <h3 className={`${style.hh3}`}>Courtney Henry</h3>
        <p className={`${style.pp}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <span className=''>
        <i className={`${style.hh3}  fa-solid fa-star  m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        </span>
      </div>
    </div>
        </div>


        <div className= {`${style.divv} col-xl-6 shadow`}>
    <div className='d-flex'>
      <div className='img-fluid mx-3 mt-5'>
      <img src={testmoia} className={`${style.imgg} `} />
      </div>
      <div className='mt-5'>
        <h3 className={`${style.hh3}`}>Courtney Henry</h3>
        <p className={`${style.pp}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <span className=''>
        <i className={`${style.hh3}  fa-solid fa-star  m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        </span>
      </div>
    </div>
        </div>




        <div className= {`${style.divv} col-xl-6 shadow`}>
    <div className='d-flex'>
      <div className='img-fluid mx-3 mt-5'>
      <img src={testmoia} className={`${style.imgg} `} />
      </div>
      <div className='mt-5'>
        <h3 className={`${style.hh3}`}>Courtney Henry</h3>
        <p className={`${style.pp}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <span className=''>
        <i className={`${style.hh3}  fa-solid fa-star  m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        </span>
      </div>
    </div>
        </div>




        <div className= {`${style.divv} col-xl-6 shadow  `}>
    <div className='d-flex'>
      <div className='img-fluid mx-3 mt-5'>
      <img src={testmoia} className={`${style.imgg} `} />
      </div>
      <div className='mt-5'>
        <h3 className={`${style.hh3}`}>Courtney Henry</h3>
        <p className={`${style.pp}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <span className=''>
        <i className={`${style.hh3}  fa-solid fa-star  m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        <i className={`${style.hh3}  fa-solid fa-star m-1`}></i>
        </span>
      </div>
    </div>
        </div>
        
      </div>
    </section>
    </>
  )
}

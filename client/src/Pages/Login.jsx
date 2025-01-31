import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

//Assests
import person4 from "../Assets/person4.svg";

function ScrollToTopOnMount() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return null;
}

const Login = () => {
  return (
    <>
      <ScrollToTopOnMount></ScrollToTopOnMount>
      <div className='flex flex-row mt-20 '>
        <div className='w-1/2 m-4 text-start sm:w-1/2'>
          <div className='w-full sm:w-1/2 bg-slate-100 rounded p-5 ml-1 sm:m-auto  '>
            <h1 className='font-bold text-2xl mb-5'>Log in</h1>
            <form action="" className='flex flex-col'>
              <label htmlFor="" className='font-bold mt-4'>Enter your mail</label>
              <input className='bg-slate-300 mt-2 h-9' required type="email" />
              <label htmlFor="" className='font-bold mt-4' >Enter password</label>
              <input className='bg-slate-300 mt-2 h-9' required type="password" />
              <Link to={"/dashboard"}>

              <input type="submit" value="Submit" className='bg-sky-600 text-white w-full h-9 mt-8' ></input>
              </Link>
            </form>
          </div>
        </div>

        <div className='w-full sm:w-1/4 h-113  items-start  sm:w-1/2 '>
          <img
            src={person4}
            alt="person"
            className='w-full h-full'
          />
        </div>

      </div>
    </>
  )
}

export default Login;
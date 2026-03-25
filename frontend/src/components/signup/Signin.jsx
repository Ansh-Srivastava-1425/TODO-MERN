import React from 'react'
import "./signup.css";
import { Headingcomp } from './Headingcomp';

const Signin = () => {
  return (
    <div> <div className='signup'>
          <div className="container">
            <div className="row">
                <div className="col-lg-4 column col-right d-flex align-items-center justify-content-center">
                <Headingcomp first="Sign" second="in" />
              </div>
              
              <div className="col-lg-8 column d-flex align-items-center justify-content-center">
                <div className='d-flex flex-column w-100 p-2'>
                  <input 
                  className="p-2 my-3 input-signup" 
                  type="email" 
                  name="email"
                  placeholder="Email" />
    
    
                   <input 
                  className="p-2 my-3 input-signup" 
                  type="password" 
                  name="password"
                  placeholder="Password " />
    
                    <div className='d-flex justify-content-center'>
                  <button className='btn-signup px-3'>Sign in</button>
                    </div>
    
                </div>
              </div>
    
              
    
            </div>
          </div>
        </div></div>
  )
}

export default Signin
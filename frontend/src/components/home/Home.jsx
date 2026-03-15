import React from 'react'
import "./home.css";

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className='text-center'>
                Organize your <br /> work and life, finally.
            </h1>
            <p>
                Become Focused, organized, and calm with Todoist.<br /> The best to do list app in the world. <br />Free forever. Available on all your devices.    
            </p>
            <button className='home-btn p-2'>
                Gets Started
            </button>
        </div>
    </div>
  )
}

export default Home
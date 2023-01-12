import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../assets/100.jpg';
const HeroArea = () => {
    return (
        <div className="hero min-h-[70vh] relative" style={{ backgroundImage: `url(${bannerImage})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
        <div className="hero-overlay  bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-nowrap font-bold text-teal-400">Welcome to my Mobile Planet</h1>
            <p className="mb-5 text-2xl text-fuchsia-300">Stay with us our services are faster than your phone!</p>
            <p className="mb-5 text-2xl text-orange-500 ">Stay Connected with the Latest and Greatest!</p>
            <Link to='/home'><button className="btn btn-primary">Get Started</button></Link>
            
          </div>
        </div>
      </div>
    );
};

export default HeroArea;
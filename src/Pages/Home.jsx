import React from 'react';
import "./Home.css";
import avatar from  "../assets/person.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpwork, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className='main-cont'>
      <div className='text-cont'>
        <h1>
          <span className='first-span'>Hi there!</span>
          <br></br>
          <span className='second-span'>I am </span><span className='name-span'>Saba</span><br></br> Web Developer 
        </h1>
        
        <div className='icons-container'>
          <a href="https://github.com/sabatvaradze" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='icons' icon={faGithub} />
          </a>
          <a href="https://www.facebook.com/saba.tvaradze.1/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='icons' icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/in/saba-tvaradze-b12928296/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='icons' icon={faLinkedin} />
          </a>
          <a href="https://www.upwork.com/freelancers/~01624c32e8338c426d" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='icons' icon={faUpwork} />
          </a>
        </div>
      
      </div>
      <div className='img-cont'>
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Home;

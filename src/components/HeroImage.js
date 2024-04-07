import React from 'react';
import backGround from '../assets/images/background.png';

const Header = () => {
    return (
        <div class="hero-image" style={{backgroundImage: `url("${backGround}")`}}>
        <div class="hero-text">
          <h1>Hi, my name is Iida Savimäki</h1>
          <p>And I'm a Developer</p>
          <a href="#personalinfo" class="btn btn-lg active" role="button" aria-pressed="true"><strong>Learn more!</strong></a>
        </div>
      </div>
    );
  };
  
  export default Header;

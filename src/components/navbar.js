import React from 'react';
import bannerImg from '../assets/images/favicon.png';

const navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg ">
            <a class="navbar-brand" href="#personalinfo">
                        <img
                            src={bannerImg}
                            alt="Iida Savimäki"
                            className="banner img-fluid"
                        /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#personalinfo">Personal Info <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#educationalbackground">Educational Background</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#workexperience">Work Experience</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                </li>
                </ul>
            </div>
            </nav>
);
}

export default navbar;
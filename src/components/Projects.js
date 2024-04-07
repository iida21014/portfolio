import React from 'react';
import spektriLogo from '../assets/images/SpektriLogo.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            picture: spektriLogo,
            alt: 'Musiikkiteatteri Spektrin logo',
            link: 'https://musiikkiteatterispektri.fi/',
            client: 'Musiikkiteatteri Spektri',
            year: '2023-2024',
            description: 'Improvement of the Musiikkiteatteri Spektri website, search engine optimization and the overall administration of the website and online store. Unfortunately all the improvements were not deployed because of funding issues.'
        },

    ];

    return(
        <a id="projects">
        <div className="projects container mt-5">
            <h2 className="mb-4">Projects</h2>
            <div className="row">
                {projects.map((project) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
                        <div className="card h-100 shadow">
                        <div className="col md-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={project.picture}
                            alt={project.alt}
                            className="logo img-fluid"
                            
                        />
                        </a>
                        </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {project.client}
                                </h6>
                                <p className="card-text">{project.description}</p>
                            </div>
                            <div className="card-footer text-muted">
                                <small>{project.year}</small>
                            </div>
                        </div>
                    </div>    
                )
                )}
            </div>
        </div>
        </a>
    );


}

export default Projects;
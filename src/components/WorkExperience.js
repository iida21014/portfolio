import React from 'react';

const WorkExperience = () => {
    const experience = [
        {
            id: 1,
            employer: 'Musiikkiteatteri Spektri',
            title: 'Music Play School Teacher',
            year: '2023-',
            description: 'I teach music play school for kids aged 0-6 years.'
        },
        {
            id: 2,
            employer: 'Freelance',
            title: 'Make-Up artist',
            year: '2017-2020',
            description: "Mostly I worked in photoshoots and music videos with several bands but also did beauty make-up for weddings and parties."
        },
        {
            id: 3,
            employer: 'RAY/Veikkaus',
            title: 'Game Specialist',
            year: '2016-2017',
            description: "My main responsibilities were table game product management and assisting in casino game product management in ray.fi. I was also part of the casino game development process for desktop and mobile games."
        },
        {
            id: 4,
            employer: 'RAY',
            title: 'Product Manager',
            year: '2015-2016',
            description: "I was in charge of Live Casino's commercial success, game portfolio, look and feel, game launches and marketing. I was constantly working with internal and external stakeholders to develop Live Casino as well as table games in general in RAY. Live Casino app was the first mobile application launched in RAY and I was the key person making it happen."
        }
    ];

    return(
        <a id="workexperience">
        <div className="educational-background container mt-5">
            <h2 className="mb-4">Work Experience</h2>
            <div className="row">
                {experience.map((work) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={work.id}>
                        <div className="card h-100 shadow">
                            <div className="card-header">
                                <h5 className="card-title mb-0">{work.title}</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {work.employer}
                                </h6>
                                <p className="card-text">{work.description}</p>
                            </div>
                            <div className="card-footer text-muted">
                                <small>{work.year}</small>
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

export default WorkExperience;
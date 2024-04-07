import React from 'react';

const EducationalBackground = () => {
    const educations = [
        {
            id: 1,
            institution: 'Häme University of Applied Sciences',
            degree: 'Bachelor of Business Information Technology',
            year: '2022-2025',
            description: ''
        },
        {
            id: 2,
            institution: 'Make-Up Artist Academy, Tampere',
            degree: 'Make-up Artist',
            year: '2022-2025',
            description: ''
        },
        {
        id: 3,
        institution: 'University of Jyväskylä',
        degree: 'Bachelor of Education',
        year: '2009-2015',
        description: ''
        }
    ];

    return(
        <a id="educationalbackground">
        <div className="educational-background container mt-5">
            <h2 className="mb-4">Educational Background</h2>
            <div className="row">
                {educations.map((education) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={education.id}>
                        <div className="card h-100 shadow">
                            <div className="card-header">
                                <h5 className="card-title mb-0">{education.institution}</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {education.degree}
                                </h6>
                                <p className="card-text">{education.description}</p>
                            </div>
                            <div className="card-footer text-muted">
                                <small>{education.year}</small>
                            </div>
                        </div>
                    </div>    
                )
                )}
            </div>
        </div>
        </a>
    );



};

export default EducationalBackground;
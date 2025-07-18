import React, {useEffect, useState} from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json') // from public folder
            .then(res => res.json()) 
            .then(setProjects)
            .catch(err => console.error(err))
    }, []);

    return (
        <div className="m-3">
            <h2>Some of my projects</h2>
            <div className="accordion" id="accordionParent">
            {projects.map((project, idx) => (
                <div className="accordion-item" key={idx}> 
                    <h3 className="accordion-header" id={`heading${project.id}`}>
                        <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${project.id}`} 
                            aria-expanded="false" 
                            aria-controls={`collapse${project.id}`}
                        >
                            {project.name}
                        </button>  
                    </h3>
                    <div 
                        id={`collapse${project.id}`} 
                        className="accordion-collapse collapse" 
                        data-bs-parent="#accordionParent"
                        aria-labelledby={`heading${project.id}`}
                    >
                        <div className="accordion-body m-3">
                            <img className="card-img-top w-25" src={project.img} alt="Card img"/>
                            <p className="card-subtitle mb-2 text-muted">{project.date}</p>
                            <p className="card-text">{project.description}</p>
                            <a className="card-link" href={project.link}>Link</a> 
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Projects;
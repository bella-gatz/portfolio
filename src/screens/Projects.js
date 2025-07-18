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
        <div>
            <h2 class="m-3">Some of my projects</h2>
            <div class="card-deck">
            {projects.map((project, idx) => (
                <div class="card m-3 w-50" key={idx} className="project"> 
                    <img class="card-img-top w-25" src={project.img} alt="Card img"/>
                    <div class="card-body">
                        <h3 class="card-title">{project.name}</h3>
                        <p class="card-subtitle mb-2 text-muted">{project.date}</p>
                        <p class="card-text">{project.description}</p>
                        <a class="card-link" href={project.link}>Link</a> 
                        {/* TODO: add check for links (some are empty) */}
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Projects;
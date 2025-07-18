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
        <section>
            <h2>Projects I have worked on!</h2>
            {projects.map((project, idx) => (
                
                <div key={idx} className="project"> 
                    <div>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p>{project.date}</p>
                    </div>

                </div>
            ))}
        </section>
    );
};

export default Projects;
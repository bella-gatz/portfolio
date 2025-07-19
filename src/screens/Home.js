
import React, {useEffect, useState} from 'react';

function Home() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json') // from public folder
            .then(res => res.json()) 
            .then(setProjects)
            .catch(err => console.error(err))
    }, []);

    return (
        <div className="container-md m-3">
            <h1>Bella Gatzemeier</h1>
            <img className="rounded-circle" src="/photos/personal/werkfit.jpeg" alt='Decked out in a button down, trousers, and loafers (which gave me blisters).' />
            <h2>Some of my projects:</h2>
            <div className="accordion" id="accordionParent">
            {projects.map((project, index) => (
                <div className="accordion-item" key={index}> 
                    <h3 className="accordion-header" id={`heading${index}`}>
                        <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`} 
                            aria-expanded="false" 
                            aria-controls={`collapse${index}`}
                        >
                            {project.name}
                        </button>  
                    </h3>
                    <div 
                        id={`collapse${index}`} 
                        className="accordion-collapse collapse" 
                        data-bs-parent="#accordionParent"
                        aria-labelledby={`heading${index}`}
                    >
                        <div className="accordion-body m-3">
                            <div id={`carouselImages${index}`} className="carousel slide">
                                <div className="carousel-inner">
                                    {Array.isArray(project.imgs) && project.imgs.length > 0 ? (
                                    project.imgs.map((img, imgIndex) => (
                                        <div className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`} key={imgIndex}>
                                            <img src={img} className="d-block w-100" alt={`Slide ${imgIndex} for ${project.name} project. Adding more descriptive alt tags soon!`}/>
                                        </div>   
                                    ))
                                    ) : (
                                        <div className={'carousel-item active'}>
                                            <img src="" className="d-block w-100" alt="Nothing to see here"/>
                                        </div>   
                                    )}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselImages${index}`} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={`#carouselImages${index}`} data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <p className="card-subtitle mb-2 text-muted">{project.date}</p>
                            <p className="card-text">{project.description}</p>
                            {project.link && <a className="card-link" href={project.link}>Link</a>}
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Home;


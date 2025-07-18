import React from 'react';

const Home = () => {
    return (
        <div style={{margin: '1rem'}}>
            <h1>About Me</h1>
            <div>
                <p className="alert alert-primary" style={{width: '50%'}}>Currently looking for 2025 entry level software engineer jobs!!</p>
                <div style={{margin: '25px', width: '50%'}}>
                    <img src="./img/portrait.jpeg" alt="Bella sleepily cheesing"/>
                </div>
                <ol>
                    <li>University of Washington Informatics Student Graduating Spring 2025</li>
                    <li>Interested in increasing tech diversity and CS education</li>
                    <li>Team worker with strong soft and hard skills (look at my portfolio)</li>
                    <li>I enjoy being in the outdoors!</li>
                </ol>
            </div>
        </div>
    );

};

export default Home;


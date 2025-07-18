// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import 'bootstrap/dist/css/bootstrap.css';

// import Resume from "./screens/Resume";
// import Feedback from "./screens/Feedback";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Bella Gatzemeier</Link>
      
            <div className='nav-item'> 
              <Link className="nav-link active" to="/projects">Projects</Link>
            </div>
          </div>
              {/* <Link to="/resume">Resume</Link> */}
              {/* <Link to="/feedback">Feedback</Link> */}

        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        {/* <Route to="/resume" element={<Resume/>} /> */}
        {/* <Route to="/feedback" element={<Feedback/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;

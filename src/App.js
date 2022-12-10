import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import '../src/styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='https://laracelic.onrender.com/' element={ <Home />} />
          <Route exact path='https://laracelic.onrender.com/about' element={ <About /> } />
          <Route exact path='https://laracelic.onrender.com/projects' element={ <Projects /> } /> 
          <Route exact path='https://laracelic.onrender.com/contact' element={ <Contact />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;

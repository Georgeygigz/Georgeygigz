import React from 'react';
import Home from './components/home';
import About from './components/meet_george';
import CareerObjective from './components/career_objective';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import FooterBody from './components/footer';
import Navigation from './components/navigation';
import { BrowserRouter } from 'react-router-dom'



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Home />
        <About />
        <Portfolio />
        <CareerObjective />
        <Contact />
        <FooterBody /> 
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Navbar from './components/navbar';
import HeroImage from './components/HeroImage';
import PersonalInfo from './components/PersonalInfo';
import EducationalBackground from './components/EducationalBackground';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';

function App() {
  return(
    <div>
      <Navbar />
      <HeroImage />
      <PersonalInfo />
      <EducationalBackground />
      <WorkExperience />
      <Projects />
    </div>
  );
}

export default App;
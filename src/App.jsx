import './App.css'
import '@fontsource/inter';
import BioCard from './components/BioCard.jsx'
import ProjectCard from './components/ProjectCard';
import { CssVarsProvider } from '@mui/joy';

function App() {

  return (
    <CssVarsProvider>
      <BioCard />
      <ProjectCard 
        projectTitle = {"Etch-a-Sketch"}
        mobileCompatibility = {false}
        projectAddress = {'https://dbyrne978.github.io/etch-a-sketch/'}
        projectImage = {"./selfie.jpg"}
      />
      <ProjectCard 
        projectTitle = {"Rock, Paper, Scissors"}
        mobileCompatibility = {true}
        projectAddress = {'https://dbyrne978.github.io/rock-paper-scissors/'}
        projectImage = {"./selfie.jpg"}
      />
      <ProjectCard 
        projectTitle = {"Generic Landing Page"}
        mobileCompatibility = {true}
        projectAddress = {'https://dbyrne978.github.io/landing-page/'}
        projectImage = {"./selfie.jpg"}
      />
      <ProjectCard 
        projectTitle = {"Magic: the Gathering Blog"}
        mobileCompatibility = {false}
        projectAddress = {'https://dbyrne978.github.io/legacy-staples/'}
        projectImage = {"./selfie.jpg"}
      />
    </CssVarsProvider>
  )
}

export default App

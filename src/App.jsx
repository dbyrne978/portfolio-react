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
        projectAddress = {'http://www.danielbyrne.dev'}
        projectImage = {"./selfie.jpg"}
      />
    </CssVarsProvider>
  )
}

export default App

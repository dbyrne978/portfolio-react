import './App.css'
import '@fontsource/inter';
import BioCard from './components/BioCard.jsx'
import ProjectCard from './components/ProjectCard';
import { CssVarsProvider } from '@mui/joy';

function App() {

  return (
    <CssVarsProvider>
      <BioCard />
      <ProjectCard />
    </CssVarsProvider>
  )
}

export default App

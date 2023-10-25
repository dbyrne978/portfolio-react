import './App.css'
import '@fontsource/inter';
import BioCard from './components/BioCard.jsx'
import ProjectCard from './components/ProjectCard';
import { CssVarsProvider } from '@mui/joy';
import Grid from '@mui/joy/Grid';

function App() {

  return (
    <CssVarsProvider>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >

        <Grid
          container
          xs={12}
          justifyContent="center"
        >
          <BioCard />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <ProjectCard 
            projectTitle = {"Etch-a-Sketch"}
            mobileCompatibility = {false}
            projectAddress = {'https://dbyrne978.github.io/etch-a-sketch/'}
            projectImage = {"./selfie.jpg"}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <ProjectCard 
            projectTitle = {"Rock, Paper, Scissors"}
            mobileCompatibility = {true}
            projectAddress = {'https://dbyrne978.github.io/rock-paper-scissors/'}
            projectImage = {"./selfie.jpg"}
          />
        </Grid>
  
        <Grid xs={12} sm={6} md={3}>
          <ProjectCard 
            projectTitle = {"Generic Landing Page"}
            mobileCompatibility = {true}
            projectAddress = {'https://dbyrne978.github.io/landing-page/'}
            projectImage = {"./selfie.jpg"}
          />
        </Grid>
  
        <Grid xs={12} sm={6} md={3}>
          <ProjectCard 
            projectTitle = {"Magic: the Gathering Blog"}
            mobileCompatibility = {false}
            projectAddress = {'https://dbyrne978.github.io/legacy-staples/'}
            projectImage = {"./selfie.jpg"}
          />
        </Grid>
  
      </Grid>
    </CssVarsProvider>
  )
}

export default App

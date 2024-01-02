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
      </Grid>
    </CssVarsProvider>
  )
}

export default App

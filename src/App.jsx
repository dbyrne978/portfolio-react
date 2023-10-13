import './App.css'
import '@fontsource/inter';
import BioCard from './components/BioCard.jsx'
import { CssVarsProvider } from '@mui/joy';

function App() {

  return (
    <CssVarsProvider>
      <BioCard />
    </CssVarsProvider>
  )
}

export default App

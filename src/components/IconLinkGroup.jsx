import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';

export default function IconLinkGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
      }}
    >
      <IconButton
        color='primary'
        component="a"
        href="https://github.com/dbyrne978"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        color='primary'
        component="a"
        href="https://www.linkedin.com/in/daniel-byrne-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        color='primary'
        component="a"
        href="mailto:dbyrne978@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailIcon />
      </IconButton>
      <IconButton
        color='primary'
        component="a"
        href="./Daniel Byrne's Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ArticleIcon />
      </IconButton>
    </Box>
  );
}
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import IconLinkGroup from './IconLinkGroup';


export default function BioCard() {
  return (
    <Card
      orientation='horizontal'
      variant='soft'
      sx={{ maxWidth: 800 }}
    >

      <AspectRatio
        sx={{ width: 200 }}
        ratio="4/4"
      >
        <img
          src="./selfie.jpg"
        />
      </AspectRatio>

      <CardContent>
        <Typography level="h1" sx={{ textAlign: 'left' }}>Daniel Byrne</Typography>
        <Typography level="h2" sx={{ textAlign: 'left' }}>Software Developer</Typography>
        <Typography level="body-md" sx={{ textAlign: 'left' }}>
          Hello, my name is Daniel Byrne. I am a software developer 
          currently looking for new opportunities. I have built applications using both the C# 
          and MERN stacks. My GitHub contains the repositories for my current personal projects
          if you would like to see my capabilities as a developer. Thank you for your time.
        </Typography>
        <IconLinkGroup />
      </CardContent>

    </Card>
  );
}
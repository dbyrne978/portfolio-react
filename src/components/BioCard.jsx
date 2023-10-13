import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function BioCard() {
  return (
    <Card
      orientation='horizontal'
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
          and MERN stacks. I have provided some of my personal projects below to demonstrate my 
          capabilities in various technologies. Thank you for your time.
        </Typography>
      </CardContent>

    </Card>
  );
}
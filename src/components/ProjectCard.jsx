import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import PhonelinkEraseIcon from '@mui/icons-material/PhonelinkErase';
import Button from '@mui/joy/Button';

export default function ProjectCard() {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src="./selfie.jpg"
          />
        </AspectRatio>
      </CardOverflow>

      <CardContent>
        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={<PhonelinkEraseIcon />}
        >
          Etch-a-Sketch
        </Typography>
        <Typography level="body-sm">
          Demonstrated proficiency in DOM manipulation.
        </Typography>
      </CardContent>

      <CardOverflow>
        <Button variant="solid" size="lg">
          Launch
        </Button>
      </CardOverflow>
    </Card>
  );
}
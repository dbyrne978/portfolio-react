import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import MobileOffIcon from '@mui/icons-material/MobileOff';
import Button from '@mui/joy/Button';
import PropTypes from 'prop-types';
import Link from '@mui/joy/Link';

export default function ProjectCard({
  projectTitle,
  mobileCompatibility,
  projectAddress,
  projectImage
}) {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={projectImage}
          />
        </AspectRatio>
      </CardOverflow>

      <CardContent>
        <Link
          href={projectAddress}
          textColor="text.primary"
          overlay
          endDecorator={
            <MobileOffIcon />
          }
        >
          {projectTitle}
        </Link>
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

ProjectCard.propTypes = {
  projectTitle: PropTypes.string,
  mobileCompatibility: PropTypes.bool,
  projectAddress: PropTypes.string,
  projectImage: PropTypes.string
}
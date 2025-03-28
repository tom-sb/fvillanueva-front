import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import FooterPage from '../../organims/footer-page';

export default function NewsView() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        bgcolor: "red", 
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        // El 100vh es opcional, si quieres que ocupe todo el alto
        minHeight: "100vh",
      }}
    >
      <Box>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Box>
      <FooterPage />
    </Container>
  );
}

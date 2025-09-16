import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";



export default function MovieCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 345, height: 450, width: 300, margin: 2 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={movie.img_link}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {movie.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Directed By : {movie.director_name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Writen By : {movie.writer_name}
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Genre: 
        </Typography> */}

        Genre: <Chip label={movie.genre} />
      </CardContent>
      <CardActions>
        <FavoriteIcon sx={{ color: 'red' }}/>
        <AccessTimeIcon />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {movie.duration}
        </Typography>
        <StarIcon sx={{ color: 'gold' }}/>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {movie.imdb_rating}
        </Typography>
      </CardActions>
    </Card>
  );
}

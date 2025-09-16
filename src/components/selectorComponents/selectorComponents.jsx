import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { getMoviesByGenre } from '../../api/movies';    

export default function SelectorComponent({name, value}) {
  const [selectedValue, setSelectedValue] = React.useState('');

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    dispatch(getMoviesByGenre(event.target.value));
  };
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label={name}
          onChange={handleChange}
        > 
          {
            value.map(item => <MenuItem value={name.toLowerCase().includes('genre')? item.genre : item.ratings}>
              {name.toLowerCase().includes('genres')? item.genre : item.ratings}</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
}

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SelectorComponent from '../selectorComponents/selectorComponents';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../slices/movieSlice';
import { getAllGenres, getMoviesBySearch } from '../../api/movies';
import { debounce } from 'lodash';
import { useEffect } from 'react';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Navbar() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllGenres());
    }, []);

    const { genres } = useSelector(state => state.movies);

    const onSearchChange = debounce((e) => {
        dispatch(getMoviesBySearch(e.target.value));
    }, 500);

    return (
        <Box sx={{ flexGrow: 1, mt: 0, mb:10 }}>
            <AppBar position="fixed" sx={{ marginTop: 0, padding: 1, backgroundColor: "#1900ffff" }}>
                <Toolbar>  
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Movies App
                    </Typography>
                    <Search onChange={(e) => onSearchChange(e)}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <SelectorComponent name="Genres" value={genres} />
                        <SelectorComponent name="Ratings" value={[]} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

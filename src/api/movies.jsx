import axios from "axios";
import { useDispatch } from "react-redux";
import { setMovies } from "../slices/movieSlice";
import { useSelector } from "react-redux";
import { setGenres } from "../slices/movieSlice";

const BaseUrl = "https://576aa634-c42c-495c-8d3c-126b224eed47-00-1g2ooaqbvrf37.pike.replit.dev/api/movies";
export const getMovies = () => async dispatch => {
    try{
        const {data} = await axios.get(BaseUrl);
        dispatch(setMovies(data));
        
    }
    catch(error){
        return error;
    }
}

export const getMoviesBySearch = (value) => async dispatch => {
    const url = BaseUrl + '/search';
    try{
        const {data} = await axios.get(url,{
            params: {
                search: value
            }
        });
        dispatch(setMovies(data));
    }catch(error){
        return error;
    }
}

export const getAllGenres = () => async dispatch => {
    const url = BaseUrl + '/genres';
    try{
        const {data} = await axios.get(url);
        dispatch(setGenres(data));
        const {genres} = useSelector(state => state.movies);
        console.log(genres);
    }catch(error){
        return error;
    }
}

export const getMoviesByGenre = (value) => async dispatch => {
    const url = BaseUrl + '/genre';
    try{
        const {data} = await axios.get(url,{
            params: {
                genre: value
            }
        });
        dispatch(setMovies(data));
    }catch(error){
        return error;
    }
}
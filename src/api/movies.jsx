import axios from "axios";
import { useDispatch } from "react-redux";
import { setMovies } from "../slices/movieSlice";

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

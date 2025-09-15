import axios from "axios";
import { useDispatch } from "react-redux";
import { setMovies } from "../slices/movieSlice";
export const getMovies = () => async dispatch => {
    const url = "https://576aa634-c42c-495c-8d3c-126b224eed47-00-1g2ooaqbvrf37.pike.replit.dev/api/movies";
    try{
        const {data} = await axios.get(url);
        dispatch(setMovies(data));
        
    }
    catch(error){
        return error;
    }
}

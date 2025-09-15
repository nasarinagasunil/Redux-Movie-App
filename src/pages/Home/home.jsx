import Navbar from "../../components/navbar/navbar"
import { useEffect } from "react"
import { getMovies } from "../../api/movies"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

export const Home = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);
    console.log(movies);

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <>
            <Navbar />
        </>
    )
}

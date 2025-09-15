import Navbar from "../../components/navbar/navbar"
import { useEffect } from "react"
import { getMovies } from "../../api/movies"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import MovieCard from "../../components/MovieCards/movieCard"

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
            <main style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", marginTop: "20px"}}>
                {movies && movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </main>
        </>
    )
}

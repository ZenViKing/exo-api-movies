import { Movie } from '../ressources/movies/movie.model';

const moviesSearch = async (req, res) => {

    try {
        const movies = await Movie.find(req.query);
        if (!movies) return res.status(400).end();
        res.status(200).json({ movies: movies });
    } catch (e) {
        console.error(e)
        res.status(400).end()
    }

}

export default moviesSearch
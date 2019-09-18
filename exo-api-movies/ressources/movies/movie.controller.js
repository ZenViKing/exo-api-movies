import { Movie } from './movie.model';


export const list = async (req, res) => {
    try {
        const movies = await Movie.find();
        if (!movies) return res.status(400).end();
        res.status(200).json({ movies: movies });
        console.log(movies)

    } catch (err) {
        console.log(err);
        res.status(400).end();

    }
}

export const getOne = async (req, res) => {
    try {
        const movie = await Movie.findOne({ _id: req.params.id });
        if (!movie) return res.status(400).end();
        res.status(200).json({ movies: movie });
        console.log(movie)

    } catch (err) {
        console.log(err);
        res.status(400).end();

    }
}

export const updateOne = async (req, res) => {
    try {
        const updatedMovie = await Movie.findOneAndUpdate(
            {
                _id: req.params.id
            },
            req.body,
            { new: true }
        )
        if (updatedMovie) return res.status(400).end();
        res.status(200).json({ movie: updatedMovie })

    } catch (err) {
        console.log(err);
        res.status(400).end()
    }
}

export const create = async (req, res) => {
    try {
        const movie = await Movie.create({ ...req.body })
        res.status(201).json(movie);
    } catch (err) {
        console.log(err);
        res.status(400).end();
    }
}
export const deleteOne = async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(
            {
                _id: req.params.id
            },
            req.body,
            { new: true }
        )
        if (deletedMovie) return res.status(400).end();
        res.status(200).json({ movie: deletedMovie })

    } catch (err) {
        console.log(err);
        res.status(400).end()
    }
}
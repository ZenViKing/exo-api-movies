import { json, urlencoded } from 'body-parser';
import { connect } from './utils/db';
import { search } from './utils/search';
import movieRouter from './ressources/movies/movie.router';
import router from './ressources/users/user.router';

const app = express();

app.disable('x-powered-by');
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/search', search)
app.use('/api/movies', movieRouter);
app.use('/api/user', router);

const start = async () => {
    try {
        await connect()
        app.listen(8001, () => {
            console.log('REST API listening on port 8001');
        })
    } catch (err) {
        throw err;
    }
}

start();
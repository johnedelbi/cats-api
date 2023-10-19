import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import dotenv from 'dotenv';

//import logger middleware
import logger from './middleware/logger.js';

//import routes
import catsRoutes from './routes/cat.js';

dotenv.config();
const PORT = process.env.PORT || 3005;

//init express
const app = express();

const __fileName = fileURLToPath(import.meta.url);
const PATH = dirname(__fileName);

//pares the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

//server static
app.use(express.static(path.join(PATH, 'public')));

//use logger
app.use(logger);

app.use(catsRoutes);

//handel 404
app.use('*', (req, res) => {
    res.status(404).render('404', {
        title: '404',
        message: 'page not found'
    });
});

//listen to the server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

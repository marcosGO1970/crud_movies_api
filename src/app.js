const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/api/moviesRoutes');
const genresRoutes = require('./routes/api/genresRoutes');
const actorsRoutes = require('./routes/actorsRoutes');

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));


app.use('/', indexRouter);
app.use('/api/movies', moviesRoutes);
app.use('/api/genres', genresRoutes);
app.use('/actors', actorsRoutes);

const port = process.env.PORT || "3001"
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

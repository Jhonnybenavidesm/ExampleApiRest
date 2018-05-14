const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

let users = ['oscar', 'juan', 'marcos', 'julieta','jhonny'];
let movies = [
    {titulo: 'Avengers Infinity War', genero: 'Fantasia', anio: '2018', director: 'Anthony Russo', imagen: 'https://www.google.com.co/search?q=Avengers+Infinity+War+sin+https&rlz=1C1CHZL_esCO760CO760&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjl8Ji8zYXbAhWBrFkKHUEjA54Q_AUICygC&biw=1366&bih=662#imgrc=njNm9mZpwY9eIM:', trailer 'https://www.youtube.com/watch?v=-f5PwE_Q8Fs'},
    {titulo: 'Nada que Perder', genero: 'Accion/Aventura' , anio: '2018', director: 'Alexandre Avancini', imagen: 'https://www.google.com.co/search?q=Nada+que+Perder&rlz=1C1CHZL_esCO760CO760&tbm=isch&source=lnms&sa=X&ved=0ahUKEwi5l_iKzoXbAhWqxFkKHR9sDzUQ_AUICygC&biw=1366&bih=662&dpr=1#imgrc=ULYTHMMVNtC3bM:', trailer 'https://www.youtube.com/watch?v=fs7sZBWlvf4'},
    {titulo: 'El no nacido', genero: 'Terror', anio: '2009', director: 'David S. Goyer', imagen: 'https://www.google.com.co/search?q=el+no+nacido&rlz=1C1CHZL_esCO760CO760&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi5lN6rzoXbAhUmxVkKHaO8BUkQ_AUICigB&biw=1366&bih=662#imgrc=hmzcSr4zxeMg9M:', trailer 'https://www.youtube.com/watch?v=dnpyoljUzfM'},
    {titulo: 'Deadpool2', genero: 'Fantasia/Comedia', anio: '2018', director: 'David Leitch', imagen: 'https://www.google.com.co/search?q=deadpool+2&rlz=1C1CHZL_esCO760CO760&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjr2qfzzoXbAhWSq1kKHZCgAiUQ_AUICigB&biw=1366&bih=662#imgrc=fyudbeiVzOXHNM:', trailer 'https://www.youtube.com/watch?v=U6VMFwS2mPk'},
   
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// ********************************************************************
// ********************************************************************

// URL raiz de la api
// http://127.0.0.1:5000
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

// URL para listar todos los usuarios
// http://127.0.0.1:5000/users
app.get('/users', (req, res) => {
    res.send(users)
})

// URL para crear un usuario
// http://127.0.0.1:5000/users
app.post('/users', (req, res) => {
    let data = req.query;
    users.push(data.user_name)
    res.send("New user add")
})

// URL para actualizar un usuario
// http://127.0.0.1:5000/users/1
app.patch('/users/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    users[params.id] = data.user_name
    res.send("User update")
})

// URL para eliminar un usuario
// http://127.0.0.1:5000/users/1
app.delete('/users/:id',(req, res) => {
    let params = req.params;
    users.splice(params.id, 1);
    res.send('User delete')
})

// ********************************************************************
// ********************************************************************



// URL para listar todos las peliculas
// http://127.0.0.1:5000/users
app.get('/movies', (req, res) => {
    res.send(movies)
})

// URL para crear una pelicula
// http://127.0.0.1:5000/users
app.post('/movies', (req, res) => {
    let data = req.query;
    let items = {titulo: data.movies_name genero: data.gen anio: data.ani director: data.dire imagen: data.ima trailer: data.trai}
    movies.push(data.movies_name)
    res.send("New movie add")
})

// URL para actualizar una pelicula
// http://127.0.0.1:5000/users/1
app.patch('/movies/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    movies[params.id] = data.movies_name
    res.send("Movies update")
})

// URL para eliminar una pelicula
// http://127.0.0.1:5000/users/1
app.delete('/movies/:id',(req, res) => {
    let params = req.params;
    movies.splice(params.id, 1);
    res.send('Movies delete')
})






//**********************************************************************
//**********************************************************************
// Crear y lanzar el servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})
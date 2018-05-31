const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

var users = [
    {
        id: '0',
        user: 'admin',
        password: '123456',
        name: 'admin',
        email: 'admin@movies.com',
        img_user: 'https://www.littlemiracles.com.au/wp-content/uploads/2015/08/kid-on-ipad.png'
    }
];


let movies = [
    {id: 1, titulo: 'Avengers Infinity War', genero: 'Fantasia', anio: '2018', director: 'Anthony Russo',imagen:'http://www.rockandpop.cl/wp-content/uploads/2018/03/landscape-1500890190-avengers-infinity-war-poster-resized-1.jpg', trailer:'https://new.cinemark.com.co/movie?tag=2400&corporate_film_id=176879'},
    {id: 2, titulo: 'Nada que Perder', genero: 'Accion/Aventura' , anio: '2018', director: 'Alexandre Avancini'},
    {id: 3, titulo: 'El no nacido', genero: 'Terror', anio: '2009', director: 'David S. Goyer'},
    {id: 5, titulo: 'Deadpool2', genero: 'Fantasia/Comedia', anio: '2018', director: 'David Leitch'},
    {id: 6, titulo: 'Get Out', genero: 'Drama', anio: '2017', director: 'Jordan Peele'},
    {id: 7, titulo: 'Logan', genero: 'Fantasia/Comedia', anio: '2017', director: 'James Mangold'},
    {id: 8, titulo: 'Wonder Woman', genero: 'Fantasia', anio: '2017', director: 'Patty Jenkins'},
    {id: 9, titulo: 'My Life as a Zucchini', genero: 'Fantasia', anio: '2016', director: 'Claude Barras'},
    {id: 10, titulo: 'Am Not Your Negro ', genero: 'Documental', anio: '2017', director: 'Raoul Peck'},
    {id: 11, titulo: 'Hidden Figures', genero: 'Drama', anio: '2016', director: 'Theodore Melfi'},
    {id: 12, titulo: 'The Salesman (Forushande) ', genero: 'Drama', anio: '2017', director: 'Asghar Farhadi'},
    {id: 13, titulo: 'Truman', genero: 'Drama/Comedia', anio: '1999', director: 'Peter Weir'},
    {id: 14, titulo: 'The Lego Batman Movie ', genero: 'Animada', anio: '2017', director: 'Chris McKay'},
    {id: 15, titulo: 'our Name. (Kimi No Na Wa.)', genero: 'Drama/Romantico', anio: '2016', director: 'Makoto Shinkai'},
    {id: 16, titulo: 'Coco', genero: 'Familiar/Infantil', anio: '2017', director: 'Lee Unkrich'},
    {id: 17, titulo: 'Star Wars', genero: 'Fantasia', anio: '2017', director: 'George Lucas'},
    {id: 18, titulo: 'Home', genero: 'Familiar/Infantil', anio: '2015', director: 'Tim Johnson'},
    {id: 19, titulo: 'sherlock holmes', genero: 'Aventura', anio: '2009', director: 'Guy Ritchie'},
    {id: 20, titulo: 'mujer que no sabia leer', genero: 'Drama', anio: '2017', director: 'Marine Francen'},
    {id: 21, titulo: 'Verdad o reto', genero: 'Suspenso', anio: '2018', director: 'Jeff Wadlow'},
    {id: 22, titulo: 'Mi familia del norte', genero: 'Comedia', anio: '2018', director: 'Dany Boon'},
    {id: 23, titulo: 'Operación huracán', genero: 'Accion', anio: '2018', director: 'Rob Cohen'},
    {id: 24, titulo: 'Doctrina: el pecado original y la reinserción', genero: 'Terror', anio: '2018', director: 'Joan Frank'},
    {id: 25, titulo: 'Lean on Pete', genero: 'Accion', anio: '2018', director: ' Andrew Haigh'},
    {id: 26, titulo: 'El ataúd de cristal', genero: 'Terror', anio: '2016', director: 'Haritz Zubillaga '},


   
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

app.post('/login', (req, res) => {
    let data = req.body;
    let login = [{searchUser: false,id: '0',user: '',password: '',name: '',email: '',img_user:''}];

    users.some(function (value, index, _arr) {
        if( (value.user == data.user) && (value.password == data.pass) ){
            login[0]['searchUser'] = true;
            login[0]['id'] = value.id;
            login[0]['user'] = value.user;
            login[0]['password'] = value.password;
            login[0]['name'] = value.name;
            login[0]['email'] = value.email;
            login[0]['img_user'] = value.img_user;
            return true;
        }else{
            return false;
        }
    });

    res.send(login)
})

// ********************************************************************
// ********************************************************************


app.post('/signup', (req, res) => {
    let data = req.body;
    let consecutive = users.length;
  
    let itemUser = {
        user: data.user,
        password: data.pass,
        name: data.name,
        email: data.email,
        repassword: '123'
    };
    // users.push(itemUser)
    res.send(itemUser)
    // res.send("usuario creado correctamente")
})




// URL para listar todos las peliculas
// http://127.0.0.1:5000/users
app.get('/movies', (req, res) => {
    res.send(movies)
})

// URL para crear una pelicula
// http://127.0.0.1:5000/users

app.post('/movies', (req, res) => {
   let data = req.query;
    let items = {titulo: data.movies_name, genero: data.gen, anio: data.ani, director: data.dire}
    movies.push(data.movies_name)
    res.send("New movie add")
})

// URL para actualizar una pelicula
// http://127.0.0.1:5000/users/1
app.patch('/movies/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    movies[params.id] = data.movies_name
    res.send("Movie update")
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
const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

// ***************************************************************
// ***************************************************************

var users = [
    {
        id: '0',
        user: 'admin',
        password: '123456',
        name: 'admin',
        email: 'admin@pelicula.com',
        img_user: 'https://www.littlemiracles.com.au/wp-content/uploads/2015/08/kid-on-ipad.png'
    },

    {
        id: '2',
        user: 'jhonny',
        password: '123456',
        name: 'jhonny',
        email: 'jhonny@pelicula.com',
        img_user: 'https://scontent.fbga1-3.fna.fbcdn.net/v/t1.0-9/15134699_1249057525151721_3710048190897085053_n.jpg?_nc_cat=0&oh=cf49a498dd3eeef8ed20a05cbed9480a&oe=5BB7A972'
    },

    {
        id: '3',
        user: 'mayerlin',
        password: '123456',
        name: 'mayerlin',
        email: 'maye@pelicula.com',
        img_user: 'https://www.littlemiracles.com.au/wp-content/uploads/2015/08/kid-on-ipad.png'
    }

];

var pelicula = [
     {  id: '1', 
        titulo: 'Avengers Infinity War', 
        genero: 'Fantasia', 
        anio: '2018', 
        director: 'Anthony Russo',
        imagen:'http://www.rockandpop.cl/wp-content/uploads/2018/03/landscape-1500890190-avengers-infinity-war-poster-resized-1.jpg',
        trailer:'https://new.cinemark.com.co/movie?tag=2400&corporate_film_id=176879'
     },

     {   id: '2', 
        titulo: 'Nada que Perder', 
        genero: 'Accion/Aventura' , 
        anio: '2018', 
        director: 'Alexandre Avancini',
        imagen:'http://www.cineart.com.br/fotos/noticias_cineart/212.jpg',
        trailer: 'http://www.cineart.com.br/fotos/noticias_cineart/212.jpg'
    },

    {   id: '3', 
        titulo: 'El no nacido', 
        genero: 'Terror', 
        anio: '2009', 
        director: 'David S. Goyer',
        imagen: 'http://ondacero.com.pe/j/images/galerias/2018-03-01_-1519911958.jpg',
        trailer: 'http://ondacero.com.pe/j/images/galerias/2018-03-01_-1519911958.jpg'
    },

    {
        id: '4', 
        titulo: 'Deadpool2', 
        genero: 'Fantasia/Comedia', 
        anio: '2018', 
        director: 'David Leitch',
        imagen: 'http://mty360.net/wp-content/uploads/2018/05/Deadpool-2.jpg',
        trailer: 'http://mty360.net/wp-content/uploads/2018/05/Deadpool-2.jpg'
    },

    {   id: '5', 
        titulo: 'Get Out', 
        genero: 'Drama', 
        anio: '2017', 
        director: 'Jordan Peele',
        imagen: 'http://3.bp.blogspot.com/-mJbzSAcWaUI/WmAD9pUyq2I/AAAAAAAAEAE/ZimN4PloKdcM9xULAtadzRbYBGvGFtAgwCK4BGAYYCw/s1600/get%2Bout%2Bp-708788.jpg',
        trailer: 'http://3.bp.blogspot.com/-mJbzSAcWaUI/WmAD9pUyq2I/AAAAAAAAEAE/ZimN4PloKdcM9xULAtadzRbYBGvGFtAgwCK4BGAYYCw/s1600/get%2Bout%2Bp-708788.jpg'
    },

    {   id: '6', 
        titulo: 'Logan', 
        genero: 'Fantasia/Comedia', 
        anio: '2017', 
        director: 'James Mangold',
        imagen: 'http://plumaslibres.com.mx/wp-content/uploads/2017/03/5807d2cb108db-690x518.jpg',
        trailer: 'http://plumaslibres.com.mx/wp-content/uploads/2017/03/5807d2cb108db-690x518.jpg'
    },

    {   id: '7', 
        titulo: 'Wonder Woman', 
        genero: 'Fantasia',
        anio: '2017', 
        director: 'Patty Jenkins',
        imagen: 'http://es.web.img2.acsta.net/c_400_200/newsv7/18/04/19/12/53/4869078.jpg',
        trailer: 'http://es.web.img2.acsta.net/c_400_200/newsv7/18/04/19/12/53/4869078.jpg'
    },

    {   id: '8', 
        titulo: 'My Life as a Zucchini', 
        genero: 'Fantasia', 
        anio: '2016', 
        director: 'Claude Barras',
        imagen: 'http://salalibre.com/wp-content/uploads/2018/03/3924480.jpg',
        trailer: 'http://salalibre.com/wp-content/uploads/2018/03/3924480.jpg'
    },

    {   id: '9', 
        titulo: 'Am Not Your Negro ', 
        genero: 'Documental', 
        anio: '2017', 
        director: 'Raoul Peck',
        imagen: 'http://unidadylucha.es/images/1803/P-15%20I%20AM%20NOT%20YOUR%20NEGRO%20FOTO.jpg',
        trailer: 'http://unidadylucha.es/images/1803/P-15%20I%20AM%20NOT%20YOUR%20NEGRO%20FOTO.jpg'
    },

    {   id: '10', 
        titulo: 'Hidden Figures', 
        genero: 'Drama', 
        anio: '2016', 
        director: 'Theodore Melfi',
        imagen: 'http://www.siempreeventos.com/wp-content/uploads/2018/05/PelculaHiddenFigures-Ateneo-CiudaddelSaber.jpg',
        trailer: 'http://www.siempreeventos.com/wp-content/uploads/2018/05/PelculaHiddenFigures-Ateneo-CiudaddelSaber.jpg'
    },

    {   id: '11', 
    titulo: 'The Salesman (Forushande) ', 
    genero: 'Drama', 
    anio: '2017', 
    director: 'Asghar Farhadi',
    imagen: 'http://plumaslibres.com.mx/wp-content/uploads/2017/03/5807d2cb108db-690x518.jpg',
    trailer: 'http://plumaslibres.com.mx/wp-content/uploads/2017/03/5807d2cb108db-690x518.jpg'
    
    },

    {   id: '12', 
    titulo: 'Truman', 
    genero: 'Drama/Comedia', 
    anio: '1999', 
    director: 'Peter Weir',
    imagen: 'http://www.nosolocine.net/wp-content/uploads/2015/08/Truman-139862176-large1.jpg',
    trailer: 'http://www.nosolocine.net/wp-content/uploads/2015/08/Truman-139862176-large1.jpg'
    },

    {   id: '13', 
        titulo: 'The Lego Batman Movie ', 
        genero: 'Animada', 
        anio: '2017', 
        director: 'Chris McKay',
        imagen: 'http://cl.buscafs.com/www.tomatazos.com/public/uploads/images/134185.jpg',
        trailer: 'http://cl.buscafs.com/www.tomatazos.com/public/uploads/images/134185.jpg'
    },

    {   id: '14', 
        titulo: 'your Name. (Kimi No Na Wa.)', 
        genero: 'Drama/Romantico', 
        anio: '2016', 
        director: 'Makoto Shinkai',
        imagen: 'http://www.movistarplus.es/recorte/n/galeria/F3385311',
        trailer: 'http://www.movistarplus.es/recorte/n/galeria/F3385311'
    },

    {   id: '15', 
    titulo: 'Coco', 
    genero: 'Familiar/Infantil', 
    anio: '2017', 
    director: 'Lee Unkrich',
    imagen: 'http://cdn.eldeforma.com/wp-content/uploads/2017/10/22885893-1490013931034775-8081349849296759067-n.jpg',
    trailer: 'http://cdn.eldeforma.com/wp-content/uploads/2017/10/22885893-1490013931034775-8081349849296759067-n.jpg'
    }



];

var generos = [
    {
        genero: 'FANTASIA',
        team1: 'Avengers Infinity War',
        team2: 'Nada que Perder',
        team3: 'El no nacido',
        team4: 'Deadpool2',
        team_img1: 'http://www.rockandpop.cl/wp-content/uploads/2018/03/landscape-1500890190-avengers-infinity-war-poster-resized-1.jpg',
        team_img2: 'http://www.nosolocine.net/wp-content/uploads/2015/08/Truman-139862176-large1.jpg',
        team_img3: 'http://ondacero.com.pe/j/images/galerias/2018-03-01_-1519911958.jpg',
        team_img4: 'http://mty360.net/wp-content/uploads/2018/05/Deadpool-2.jpg'
    },


    {
        genero: 'Drama',
        team1: 'your Name',
        team2: 'Truman',
        team3: 'The Salesman',
        team4: 'Deadpool2',
        team_img1: 'http://www.movistarplus.es/recorte/n/galeria/F3385311',
        team_img2: 'http://ondacero.com.pe/j/images/galerias/2018-03-01_-1519911958.jpg',
        team_img3: 'http://plumaslibres.com.mx/wp-content/uploads/2017/03/5807d2cb108db-690x518.jpg',
        team_img4: 'http://www.siempreeventos.com/wp-content/uploads/2018/05/PelculaHiddenFigures-Ateneo-CiudaddelSaber.jpg'
    },

    
    {
        genero: 'Terror',
        team1: 'El no nacido',
        team2: 'Nada que Perder',
        team3: 'El no nacido',
        team4: 'Hidden Figures',
        team_img1: 'http://ondacero.com.pe/j/images/galerias/2018-03-01_-1519911958.jpg',
        team_img2: 'http://ondacero.com.pe/j/images/galerias/2018-03-01_-1519911958.jpg',
        team_img3: 'http://ondacero.com.pe/j/images/galerias/2018-03-01_-1519911958.jpg',
        team_img4: 'http://ondacero.com.pe/j/images/galerias/2018-03-01_-1519911958.jpg'
    }

];

var sinopsis = [
    {
        id: '1',
        name: 'Avengers Infinity War',
        description: 'Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.',
        star: '3',
        url_img: 'http://www.rockandpop.cl/wp-content/uploads/2018/03/landscape-1500890190-avengers-infinity-war-poster-resized-1.jpg'
    },

    {
        id: '2',
        name: 'Nada que Perder',
        description: 'Nada que perder es una película dirigida por Alexandre Avancini con Day Mesquita, Petronio Gontijo, Beth Goulart. Año: 2018. Título original: Nada a Perder.',
        star: '3',
        url_img: 'http://www.cineart.com.br/fotos/noticias_cineart/212.jpg'
    },

    {
        id: '3',
        name: 'El no nacido',
        description: 'Con la ayuda de un espiritista (Gary Oldman), una mujer (Odette Yustman) descubre una maldición familiar que data de la Alemania nazi e involucra a un espíritu endemoniado con el poder de destruir cualquier cosa y persona.',
        star: '3',
        url_img: 'http://ondacero.com.pe/j/images/galerias/2018-03-01_-1519911958.jpg'
    },

    {
        id: '4',
        name: 'Deadpool2',
        description: 'Deadpool 2​ es una película de superhéroes basada en el personaje de Marvel Comics Deadpool, distribuida por 20th Century Fox. Es la duodécima película de la saga de películas de X-Men, y una secuela directa de Deadpool la película de 2016.',
        star: '3',
        url_img: 'http://mty360.net/wp-content/uploads/2018/05/Deadpool-2.jpg'
    },


    {   id: '5', 
        name: 'Get Out', 
        description: 'Drama', 
        star: '3', 
        url_img: 'http://3.bp.blogspot.com/-mJbzSAcWaUI/WmAD9pUyq2I/AAAAAAAAEAE/ZimN4PloKdcM9xULAtadzRbYBGvGFtAgwCK4BGAYYCw/s1600/get%2Bout%2Bp-708788.jpg'
        
    },

    {   id: '6', 
        name: 'Logan', 
        description: 'Fantasia/Comedia', 
        star: '3', 
        url_img: 'http://plumaslibres.com.mx/wp-content/uploads/2017/03/5807d2cb108db-690x518.jpg'
    },

    {   id: '7', 
        name: 'Wonder Woman', 
        description: 'Fantasia',
        star: '3', 
        url_img: 'http://es.web.img2.acsta.net/c_400_200/newsv7/18/04/19/12/53/4869078.jpg'
    },

    {   id: '8', 
        name: 'My Life as a Zucchini', 
        description: 'Fantasia', 
        star: '3', 
        url_img: 'http://salalibre.com/wp-content/uploads/2018/03/3924480.jpg'
    },

    {   id: '9', 
        name: 'Am Not Your Negro ', 
        description: 'Documental', 
        star: '3', 
        url_img: 'http://unidadylucha.es/images/1803/P-15%20I%20AM%20NOT%20YOUR%20NEGRO%20FOTO.jpg'
    },

    {   id: '10', 
        name: 'Hidden Figures', 
        description: 'Drama', 
        star: '3', 
        url_img: 'http://www.siempreeventos.com/wp-content/uploads/2018/05/PelculaHiddenFigures-Ateneo-CiudaddelSaber.jpg'
    }

    
];

var trailer = [
     {
        id: '1',
        title: 'Avengers Infinity War',
        subtitle: 'Los superhéroes se alían para vencer al poderoso Thanos',
        url_news: 'http://www.rockandpop.cl/wp-content/uploads/2018/03/landscape-1500890190-avengers-infinity-war-poster-resized-1.jpg'
    },

    {
        id: '2',
        title: 'Nada que Perder',
        subtitle: 'Nada que perder es una película dirigida por Alexandre Avancini con Day Mesquita',
        url_news: 'http://www.cineart.com.br/fotos/noticias_cineart/212.jpg'
    },

    {
        id: '3',
        title: 'El no nacido',
        subtitle: 'descubre una maldición familiar',
        url_news: 'http://ondacero.com.pe/j/images/galerias/2018-03-01_-1519911958.jpg'
    },

    {
        id: '4',
        title: 'Deadpool2',
        subtitle: 'película de superhéroes',
        url_news: 'http://mty360.net/wp-content/uploads/2018/05/Deadpool-2.jpg'
    }

    


    
];

// ***************************************************************
// ***************************************************************

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

// ***************************************************************
// ***************************************************************

// Listar todos los partidos
app.get('/pelicula', (req, res) => {
    res.send(pelicula)
})

// Listar todos los grupos
app.get('/genero', (req, res) => {
    res.send(generos)
})

// Listar todas las noticias
app.get('/trailer', (req, res) => {
    res.send(trailer)
})

// Listar todos los estadios
app.get('/sinopsis', (req, res) => {
    res.send(sinopsis)
})

// Validar user and pass 
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

// Metodo para crear una cuenta de usuario
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

// ***************************************************************
// ***************************************************************
 
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})
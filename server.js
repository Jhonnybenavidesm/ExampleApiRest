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
        email: 'admin@worldcup.com',
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
        team_img2: 'http://www.cineart.com.br/fotos/noticias_cineart/212.jpg',
        team_img3: 'http://ondacero.com.pe/j/images/galerias/2018-03-01_-1519911958.jpg',
        team_img4: 'http://mty360.net/wp-content/uploads/2018/05/Deadpool-2.jpg'
    }
    
];

var sinopsis = [
    {
        id: '1',
        name: 'Estadio Kaliningrado',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/zd4xfvozxlbz4ogzvl84.jpg'
    },
    {
        id: '2',
        name: 'Estadio Volgogrado Arena',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/n0i7ecb1dlfjkcevjn68.jpg'
    },
    {
        id: '3',
        name: 'Estadio Ekaterimburgo Arena',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/qwmfhwry65bhnowuu792.jpg'
    },
    {
        id: '4',
        name: 'Estadio Fisht',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/mm/photo/tournament/competition/02/89/93/84/2899384_full-lnd.jpg'
    },
    {
        id: '5',
        name: 'Estadio Kazán Arena',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/iyvktjjff6om7clsussx.jpg'
    },
    {
        id: '6',
        name: 'Estadio Nizhni Nóvgorod',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/iwokfedscpj4defmjxef.jpg'
    },
    {
        id: '7',
        name: 'Estadio Luzhniki',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/p1askyr6af4jekbzujmx.jpg'
    },
    {
        id: '8',
        name: 'Estadio Samara Arena',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/d0mymt1ubl2pypmu3gn3.jpg'
    },
    {
        id: '9',
        name: 'Estadio Rostov Arena',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/e95vbvut3zk2z2kjaqf0.jpg'
    },
    {
        id: '10',
        name: 'Estadio Spartak',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/ju6b9ulfzqdxsliopfef.jpg'
    },
    {
        id: '11',
        name: 'Estadio San Petersburgo',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/zvisds7bd2u4nzayjat8.jpg'
    },
    {
        id: '12',
        name: 'Estadio Mordovia Arena',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/pe6ww45wda53kaj226y0.jpg'
    }
];

var trailer = [
    {
        id: '1',
        title: 'Rusia da la bienvenida al mundo',
        subtitle: 'Tras años de duro trabajo, el país anfitrión se prepara para recibir a todos los aficionados que vengan a Rusia y a los combinados en liza.',
        url_news: 'https://img.fifa.com/image/upload/t_tc1/fncpsqsxjsujcgqryl8p.jpg'
    },
    {
        id: '2',
        title: 'Live It Up, la canción oficial de Rusia 2018',
        subtitle: 'Descubre ahora la música que nos acompañará durante la Copa Mundial de la FIFA Rusia 2018. Interpretada por Nicky Jam, con Will Smith y Era Isterefi.',
        url_news: 'https://img.fifa.com/image/upload/t_tc1/ax7h2zljgevmmv8povax.jpg'
    },
    {
        id: '3',
        title: '356.700 entradas asignadas en solo 24 horas',
        subtitle: 'Dado el gran interés que despierta el torneo, la FIFA recuerda a los aficionados que FIFA.com/tickets es la única página web oficial para la compra de entradas.',
        url_news: 'https://img.fifa.com/image/upload/t_tc1/vobrzd4d2veojlldjqim.jpg'
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
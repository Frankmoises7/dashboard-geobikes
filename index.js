const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')


const app = express();
const port = 3000;

const db = require('./db');

app.set('view engine', 'ejs');
app.use(expressLayouts)

app.use(express.static(path.join(__dirname, 'public')))

const router = require('./routes/router')
app.use(router.routes)


app.listen(port, function() {
    console.log('Servidor en ejecución en el puerto', port);
    db.connectDB(function() {
        // Aquí puedes realizar otras operaciones después de establecer la conexión a la base de datos
        });
});

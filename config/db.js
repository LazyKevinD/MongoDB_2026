const mongoose = require('mongoose');

const conectarDB = () => {
    //const URI = 'mongodb://lazy:kevin@ac-tbxhz4o-shard-00-00.9c5jkrh.mongodb.net:27017,ac-tbxhz4o-shard-00-01.9c5jkrh.mongodb.net:27017,ac-tbxhz4o-shard-00-02.9c5jkrh.mongodb.net:27017/?ssl=true&replicaSet=atlas-9ja4xy-shard-0&authSource=admin&appName=Cluster0';

    mongoose.connect("mongodb://lazy:kevin@ac-tbxhz4o-shard-00-00.9c5jkrh.mongodb.net:27017,ac-tbxhz4o-shard-00-01.9c5jkrh.mongodb.net:27017,ac-tbxhz4o-shard-00-02.9c5jkrh.mongodb.net:27017/?ssl=true&replicaSet=atlas-9ja4xy-shard-0&authSource=admin&appName=Cluster0");

    const conexion = mongoose.connection;

    conexion.on('error', console.error.bind(console, 'Error en conexión a MongoDB'));

    conexion.once('open', () => {
        console.log('Conexión exitosa a MongoDB');
    });
};

module.exports = conectarDB;
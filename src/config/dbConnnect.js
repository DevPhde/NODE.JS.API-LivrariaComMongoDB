import mongoose from "mongoose";

mongoose.connect("URL"); // COLOCAR URL BANCO DE DADOS MONGODB AQUI

let db = mongoose.connection;

export default db;

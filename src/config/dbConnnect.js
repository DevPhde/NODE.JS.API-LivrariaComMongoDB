import mongoose from "mongoose";

mongoose.connect("mongodb+srv://aluralivros:123@cluster0.laawx9g.mongodb.net/alura-nodee");

let db = mongoose.connection;

export default db;
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import serviceRoutes from './routes/services.js'
import saleRoutes from './routes/sales.js';
// import path from 'path';

const app = express()
const mongodbURL = "mongodb+srv://chahmedejaz:034@cluster0.si7h0.mongodb.net/haq-service-station?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODV_URI || mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Successfully connected to the database..."))
        .catch(() => console.log("Could not connect..."));

// app.use(express.static(path.join(__dirname + "public")))
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/services', serviceRoutes);
app.use('/sales', saleRoutes);


if (process.env.NODE_ENV === 'production') {
        app.use(express.static('../frontend/build'));
}

app.listen(PORT);
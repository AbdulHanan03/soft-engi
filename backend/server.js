import express from 'express';
import mongoose from 'mongoose';
import HotelRoutes from './routes/hotels.js';
import cors from 'cors';

mongoose.connect("mongodb+srv://ali:Hamzalab123@cluster0.1tz8zeh.mongodb.net/")
    .then(() => {console.log('MongoDB connected...')})
    .catch((err) => {console.log(err)});

// const connectDB = async () => {
//     try {
//         const conn = await mangoose.connect('mongodb+srv://ali:Hamzalab123@cluster0.1tz8zeh.mongodb.net/', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         });
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1);
//     }
// };

// Middleware to parse JSON bodies
const app = express();

app.use(cors());
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})
app.use('/api', HotelRoutes);


// app.get("/", (req,res)=>{
//     res.json({msg:"Hello and welcome"});
// })


app.listen(4000, () => {
  console.log("Listening on port 4000!");
});
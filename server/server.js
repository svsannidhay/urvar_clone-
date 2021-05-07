import express from 'express';
import mongoose from 'mongoose';
import supplyCards from './models/supplyCards.js';
import Cors from 'cors';

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:admin@cluster0.mdk83.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;
con.on('open',() => console.log('connected...'));

//API endpoints 
app.get('/',(req ,res) => res.status(200).send("Hello world"));

app.post('/urvar/supply', (req,res) => {
  const supplyCard = req.body;
  supplyCards.create(supplyCard, (err,data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/urvar/supply', (req,res) => {
  supplyCards.find( (err,data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`Listening of loaclhost: ${port}`));

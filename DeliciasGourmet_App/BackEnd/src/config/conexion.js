require('dotenv').config();
//Configuracion de la base de datos

const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@deliciasgourmet.ielmrrp.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

module.exports = () => {
  const Connection = () => {
    mongoose
      .connect(uri, 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
      .then(() => console.log('Connected to database'))

      .catch(e => console.log('Not connected', e));
  };

  Connection();
};

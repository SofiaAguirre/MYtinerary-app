const mongoose = require ('mongoose');

mongoose.connect(process.env.DEV_DB, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).catch (error => console.log(error)) 

const connection = mongoose.connection;

connection.once('open', () => console.log("La base de datos fue conectada correctamente!"));
mongoose.Promise = global.Promise;
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const graphSchema = require('./schema/schema');
const mongoose = require('mongoose');
const mongoURL = require('./config').mongoURL;
const cors =  require('cors');

const app = express();

// Allow cross origin requests
app.use(cors());

// connect to mongo db
mongoose.connect(mongoURL,{useNewUrlParser:true , useUnifiedTopology:true}, () =>{
    console.log('Database connected');
})

app.use('/graph',graphqlHTTP({
    schema: graphSchema,
    graphiql: true
}));

app.listen(4000,() => {
    console.log('Server running on port 4000.')
});
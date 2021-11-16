const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
require('dotenv').config();

const port = process.env.USER_PORT;


const IncomeRouter = require('./routes/IncomeRouter')

const CategoryRouter = require('./routes/CategoryRouter')

const ExpenseRouter = require('./routes/ExpenseRouter')


const  app = express();
app.use(cors());
app.use(express.json())

mongoose.connect(
    'mongodb://127.0.0.1:27017/mobileapp',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
).then(()=>{

    app.listen(port, '192.168.1.11', function (){
       console.log(`API Service up And running on ${port}`);
    });

}).catch((error)=>{
    console.log(error)
})

app.use('/Income',IncomeRouter)

app.use('/Category', CategoryRouter)

app.use('/Expense', ExpenseRouter)
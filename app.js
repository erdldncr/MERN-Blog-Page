
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

///express app
const app=express()

//connect to mongodb
const dbURL='mongodb+srv://erdldncr:Erdldncr.1903@net-ninja.0hlxa.mongodb.net/net-ninja?retryWrites=true&w=majority'

mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})///second parameter is to prevent the message that comes from terminal
.then(res=>{
  app.listen(3000) /// i typed this here, this way server will not run till i connect to the db
  console.log('connect to the db')
})
.catch(err=>{
  console.log(err)
})


//register view engines
app.set('view engine','ejs')



/////middleware && static files

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))///formdan gelen datayi almak icin gerekli
app.use(morgan('dev'))




app.get('/',(req,res)=>{


res.redirect('/blogs')
  
})
app.get('/about',(req,res)=>{
  

  res.render('about',{title:'About'})
  // res.send('<p>About Page page</p>')

})
app.use('/blogs', blogRoutes);
//404 page
//if nothing matches then this will catcch de url like default in switch 
app.use((req,res)=>{
  res.status(404).render('404',{title:'Error'})
})
const { Console } = require('console');
const express= require('express');
const hbs=require('hbs')
const path= require('path');
const app =express();
const PORT= 3500
const staticPath=path.join(__dirname,'public');
app.use(express.static(staticPath));
app.set('view engine','hbs');
const viewsPath=path.join(__dirname,'views/Templates');
app.set('views',viewsPath);
const PartialView=path.join(__dirname,'views/Partials');
hbs.registerPartials(PartialView)
app.get('/',(req,res)=>{
    res.render("index");
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render('error404');
})
app.listen(PORT,()=>{console.log(`Server ZRunning on Port ${PORT}`)})

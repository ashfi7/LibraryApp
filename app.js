const express=require('express');
const chalk=require('chalk');
const path=require('path');
const nav=[
    {
        link:'/books',
        title:'Books'
    },
    {
        link:'/authors',
        title:'Authors'
    }
    ];
   

var app=express();
const booksRouter=require('./src/routes/bookRoutes.js')(nav);

app.use('/books',booksRouter);

app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs');





app.all('/',function(req,res){
    res.render('index',
    {
        nav,
        title:'Library'
        });
    
});
app.listen(3000,function(){
    console.log("listening to port" + chalk.green("3000"));
});

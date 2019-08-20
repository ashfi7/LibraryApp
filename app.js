const express=require('express');
const chalk=require('chalk');
const path=require('path');

var app=express();
const booksRouter=express.Router();

app.use('/books',booksRouter);

app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs');

var books=[
    {
        title:'Sherlock Holmes',
        genre:'Detective',
        author:'Arthur Conan Doyle'
    },
    {
        title:'Fault in Our Stars',
        genre:'Romance,Emotional',
        author:'John Green'
    },
    {
        title:'First Bite',
        genre:'Horror,Comedy',
        author:'Bee Wilson'
    }
]

booksRouter.route('/:id')
 .get((req,res)=>{
    const id=req.params.id;

    res.render('book',
        {
            nav:[
                {
                    link:'/books',
                    title:'Books'
                },
                {
                    link:'/authors',
                    title:'Authors'
                }
                ],
                title:'Books',
                book:books[id]
            });
 });

booksRouter.route('/')
 .get((req,res)=>{
    res.render('books',
    {
        nav:[
            {
                link:'/books',
                title:'Books'
            },
            {
                link:'/authors',
                title:'Authors'
            }
            ],
            title:'Books',
            books
        });
    
});


app.all('/',function(req,res){
    res.render('index',
    {
        nav:[
            {
                link:'/books',
                title:'Books'
            },
            {
                link:'/authors',
                title:'Authors'
            }
            ],
            title:'Library'
        });
    
});
app.listen(3000,function(){
    console.log("listening to port" + chalk.green("3000"));
});

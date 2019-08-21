const express= require('express');
const booksRouter=express.Router();


function router(nav){
    var books=[
        {
            title:'Sherlock Holmes',
            genre:'Detective',
            author:'Arthur Conan Doyle',
            image:'a1.jpeg'
        },
        {
            title:'Fault in Our Stars',
            genre:'Romance,Emotional',
            author:'John Green',
            image:'a2.jpg'
        },
        {
            title:'First Bite',
            genre:'Horror,Comedy',
            author:'Ruth Ames',
            image:'a3.jpeg'
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
    return booksRouter;   
}

module.exports=router;
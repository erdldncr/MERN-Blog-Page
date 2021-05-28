const mongoose=require('mongoose')
const Schema=mongoose.Schema;

// gondereccegim bloglarin structurelarini yazdim
const blogSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }

},{timestamps:true});

///ornek bir model olustryrum
const Blog=mongoose.model('Blog',blogSchema)
//tekil yaziyrm o kendini cogaltaccak  yazdigim [Blog] collectionin adi database de ki
//blogschema 2. parametre buda su anlama geliyr blogs connection'a bir data gelecek ve yapisi blogSchema da ki gibi olacak

module.exports=Blog;
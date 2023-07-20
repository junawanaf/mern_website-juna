import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import "dotenv/config"

//const path = require('./routes/api/items')

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const PORT = process.env.PORT || 9002;

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin:utbqTdERwXRCWvZK@mern-website.d6sigzw.mongodb.net/MalasNgodings", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connect to MalasNgodings database")
})

//user
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
const User = new mongoose.model("User", userSchema)

//pesanan
const pesananSchema = new mongoose.Schema({
    email: String,
    pesan: String
})

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Berhasil login ke akun anda.", user: user})
            } else {
                res.send({ message: "Masukkan password dengan benar."})
            }
        } else {
            res.send({message: "Akun tidak terdaftar, silahkan klik oke dan Register."})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "Email atau akun sudah terdaftar"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Berhasil Terdaftar, Silahkan login sekarang." })
                }
            })
        }
    })
    
}) 

app.post("/pesanan", (req, res)=> {
    const { email, pesan} = req.body
    Pesanan.findOne({ email, pesan}, (err, pesanan) => {
        if(pesanan){
            res.send({message: "Terimakasih sudah memesan menu di MalasNgodings"})
        }
    })
}) 

//app.use('/api/items', items);

// Accessing the path module
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`server running on @mern-website.d6sigzw.mongodb.net/MalasNgodings`);
  });
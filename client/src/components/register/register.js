import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1><span>Mendaftar</span></h1>
            <p><strong>Malas Ngoding's</strong> Tutorial pemrograman web, mobile dan desktop lengkap berbahasa indonesia. dari dasar hingga mahir.</p>
            <br></br>
            <input type="text" name="name" value={user.name} placeholder="Nama kamu" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Email kamu" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Password kamu" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Ulangi Password kamu" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Mendaftar</div>
            <div className="or">atau</div>
            <div className="buttonLogin" onClick={() => history.push("/login")}>Masuk</div>
        </div>
    )
}

export default Register
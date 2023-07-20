import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <div className="login">
            <h1><span>Masuk</span></h1>
            <p><strong>Malas Ngoding's</strong> Tutorial pemrograman web, mobile dan desktop lengkap berbahasa indonesia. dari dasar hingga mahir.</p>
            <br></br>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Masukkan Email kamu"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Masukkan Password kamu" ></input>
            <div className="button" onClick={login}>Masuk</div>
            <div className="or">atau</div>
            <div className="buttonRegister" onClick={() => history.push("/register")}>Mendaftar</div>
        </div>
    )
}

export default Login
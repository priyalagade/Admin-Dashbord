import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history=useNavigate();

    const [f_username,setF_username]=useState('')
    const [f_pwd,setF_pwd]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:5555/",{
                f_username,f_pwd
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:f_username}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setF_username(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => {setF_pwd(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>

        </div>
    )
}

export default Login
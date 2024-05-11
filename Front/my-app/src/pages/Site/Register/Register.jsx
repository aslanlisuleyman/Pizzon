import React, { useState } from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom' 
const Register = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
      e.preventDefault()  
      axios.post('http://localhost:3000/Register',{name,email,password}).then(result=>{console.log(result)
      navigate('/Login')
     


    })
      .catch(err=>console.log(err))
    }
  return (
    <div className='login'>
    <div class="body">
            <div class="containerr">
            <form onSubmit={handleSubmit}>

                    <div class="head">
                        <span>Sign up</span>
                        <p>Create a free account with your email.</p>
                    </div>
                    <div class="inputs">
                        <input type="text" required placeholder="Full Name" onChange={(e)=>setName(e.target.value)}/>
                        <input type="email" required placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" required placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button>Sign up</button>
                </form>
                <div class="form-footer">
                    <p>Have an account? <Link to="/Login">Login</Link></p> 
                </div>
        
            </div>
    
        </div>
        
    
        </div>
  )
}

export default Register
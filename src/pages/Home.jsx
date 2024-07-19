import React from 'react'
import { useState } from 'react'
import "./Home.css"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/Firebase'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSignInActive, setIsSignInActive] = useState(true);
    const [error , SetError] = useState("");

    const navigate = useNavigate();

    function handleEmailChange(e)    {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleMethodChange()   {
        setIsSignInActive(!isSignInActive);
        SetError("");
    }

    function handleSignin(e) {
        e.preventDefault();
        if(!email || !password) {
            SetError("Please enter email and password!");
            return;
        }
    
        signInWithEmailAndPassword(auth, email , password)
        .then(response => {
        const user = response.user;
        navigate("/private")
    })
    .catch(error => {
        const errorMessage = error.message;
        SetError(errorMessage);
    })
    }

   function handleSignup(e)  {
    e.preventDefault();
     if(!email || !password) {
           SetError("Please enter email and password!");
           return;
        }
    createUserWithEmailAndPassword(auth, email , password)
    .then(response => {
        const user = response.user;
        navigate("/private")
    })
    .catch(error => {
        const errorMessage = error.message;
        SetError(errorMessage);
    })
   }

  return (
    <div className='form-container'>
        <form className='form'>
            <h2>{isSignInActive ? <span style={{color:"green"}}>Signin</span> : <span style={{color: "#2196f3"}}>Signup</span>}</h2>

            <label htmlFor="email">Email : </label>
            <input type="email" id='email' placeholder='Enter your email' onChange={handleEmailChange}  className='input-field' value={email}/>
            <label htmlFor="password">Password : </label>
            <input type="password" id='password' placeholder='Enter your password' onChange={handlePasswordChange} className='input-field' value={password} />

            {error && <p className='error-message'>{error}</p>}
            {isSignInActive ? (<button onClick={handleSignin} className='button sign-in-btn'>Signin</button>) : ( <button onClick={handleSignup} className='button sign-up-btn'>Signup</button>)}
            <p className='form-switch'>
                {isSignInActive ? "Don't have an account? " : "Already have an account? "}
                <span onClick={handleMethodChange} className='form-switch-link'>
                    {isSignInActive? "Signup" : "Signin"}
                </span>
            </p>
           
        </form>
    </div>
  )
}

export default Home
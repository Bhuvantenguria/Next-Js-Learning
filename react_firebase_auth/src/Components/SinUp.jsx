import React, { useState } from 'react'
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SinUp() {
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const createAccount = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth , email , password)
        .then((userCredentials) => {
            console.log(userCredentials)
        })
        .catch((error) => {
            console.log(error)
        })
    }
  return (
    <div className='container'>
        <h1>SinUp Form</h1>
        <form onSubmit={createAccount}>
            
            <div>
                <label htmlFor="email">E-Mail : </label>
                <input type="email" id = "email" placeholder="Enter Your E-mail" value = {email} 
                name = 'email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input type="password" id = "password" placeholder='Enter Your Password'  
                name = 'password' value = {password}  onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SinUp








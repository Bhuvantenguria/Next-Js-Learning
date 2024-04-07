import React, { useEffect, useState } from 'react'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword , signOut } from 'firebase/auth';

function LogIn() {
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const [user , setUser] = useState(null);
    const logInAccount = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth , email , password)
        .then((userCredentials) => {
            console.log(userCredentials)
            setUser(userCredentials.user);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    
        const logOut = () => {
            signOut(auth).then(() => {
                
                setUser(null)
                console.log("Signed Out");
            
            }).catch((error) => {
                console.log(error)
            })
        }

    useEffect(() => {
        const unsubscribe =  auth.onAuthStateChanged((user) =>{
           if(user){
            setUser(user);
           }
           else{
            setUser(null);
           }
        });
        return () => unsubscribe();
    },[])

  return (
    <div className='container'>
        <h1>LogIn Form</h1>
        <form onSubmit={logInAccount}>
            
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

        {user ? (
            <div>
                <p> Welcome Bhai ! {user.email}</p>
                <button onClick={logOut}>LogOut</button>
            </div>
        ):(
            <div>
                <p>Please LogIn first</p>
            </div>
        )}

    </div>
  )
}

export default LogIn








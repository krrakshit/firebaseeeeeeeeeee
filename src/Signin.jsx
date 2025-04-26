import React , {useState} from "react";
import { signInWithEmailAndPassword, getAuth} from "firebase/auth"
import {firebase} from "./firebase"
const auth = getAuth(firebase)

export const Signin = () => {

    const [email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const signinuser = ()=>{
        signInWithEmailAndPassword(auth,email,password).then(() => alert("Sucessfully signid in")).catch((err) => console.log(err));
      }

    return (
        <div className="signup-component">
            <label>Email</label>
            <input type="email" required placeholder="Enter your email here" onChange={e => setEmail(e.target.value)} value={email}/>
            <label>Password</label>
            <input type="password" required placeholder="Enter your password" onChange={e => setPassword(e.target.value)} value={password}/>
            <button onClick={signinuser}>Signin</button>
        </div>
    )   
}
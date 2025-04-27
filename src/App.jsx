import { useEffect,useState } from 'react'
import './App.css'
import { Signup } from './Signup'
import { Signin } from './Signin'
import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth'
import { firebase } from './firebase'

const auth = getAuth(firebase)

function App() {

  const [user,setUser] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth,(user) =>{
      if(user){
        setUser(user)
      }
      else{
        setUser(null)
      }
    })

  },[])



  if(user === null){
    return (
      <>
        <Signup />
        <Signin/> 
      </>
    )  
  }
  else{
    return(
      <>
      Hello user! you are logged in {user.email}
      <button onClick={() => signOut(auth)}>Logout</button>
      </>
    )
  }
}

export default App  

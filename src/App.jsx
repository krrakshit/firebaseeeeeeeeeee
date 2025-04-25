import './App.css'
import { getDatabase,ref,set } from "firebase/database"
import {firebase} from "./firebase"

const db = getDatabase(firebase);



function App() {

  const putdata = ()=>{
    set(ref(db,'users/rakshit'),{
      id:1,
      name : "rakshit",
      age : 20,
    }).then(
      alert("data passed")
    )
  }

  return (
    <>
      hello
      <button onClick={putdata}>Put data</button>
    </>
  )
}

export default App

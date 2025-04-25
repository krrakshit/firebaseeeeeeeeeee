import React from "react";
import { getDatabase,ref,set } from "firebase/database"
import {firebase} from "./firebase"

const db = getDatabase(firebase);

export  const putdata = ()=>{
    const putdata = ()=>{
        set(ref(db,'users/rakshit'),{
          id:1,
          name : "rakshit",
          age : 20,
        }).then(
          alert("data passed")
        )
      }

      return(
        <>
        <button onClick={putdata}></button>
        </>
      )
}
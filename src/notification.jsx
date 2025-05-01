import { getMessaging } from "firebase/messaging";
import { firebase } from "./firebase";
import { useEffect } from "react";

const messaging = getMessaging(firebase)

export default function Notification(){

    async function  requestperms(){
       await Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                new Notification("Permission granted!", {
                  body: "You will now receive notifications.",
                });
              } else if (permission === "denied") {
                alert("Notification permission denied.");
              } else {
                alert("Notification permission dismissed.");
            }
        })
       
    }

useEffect(() =>{
    // request user for notification permission
requestperms();

},[])



    return(
        <>
        CHeck for notification 
        </>
    )
}
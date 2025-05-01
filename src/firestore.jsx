import { getFirestore,collection,addDoc,updateDoc,getDocs,doc,getDoc,query,where} from "firebase/firestore";
import { firebase } from "./firebase";

const firestore = getFirestore(firebase)


export default function Firestore(){
    const writeData = async() =>{
       const result = await addDoc(collection(firestore,'cities'),
        {
            name : "Patna",
            temperature : "21^ C",
            pincode : 800004
        })
        console.log("result", result)
    }

    const makeSubCollection = async() =>{
        const result = await addDoc(collection(firestore,'cities/tpIqCvX8xwgYHIRK2zwN/places'),
    {
        place : "This is a place",
        description : "its a descripton"
    })
    console.log("result" ,result)
    }

    const getDocument= async() =>{
        const ref = doc(firestore,"cities","tpIqCvX8xwgYHIRK2zwN");
        const snap = await getDoc(ref)
        console.log(snap.data())
    }
    const getdocumentbyQuery  = async() =>{
        const collectionref = collection(firestore,"users");
        const q = query(collectionref,where('isMale','==','true'))
        const snapshot = await getDocs(q);
        snapshot.forEach((data) => console.log(data.data()))
   
    }

    const update = async() =>{
        const docref = collection(firestore,"cities","tpIqCvX8xwgYHIRK2zwN")
       await  updateDoc(docref,{
            name : "New delhi"
        })
    }

    return(
<>
it is the firestore database
<button onClick={writeData}>Put data</button>
<button onClick={makeSubCollection}>put sub collection</button>
<button onClick={getDocument}>get document</button>
<button onClick={getdocumentbyQuery}>Get docs by quert</button>
<button onClick={update}>Update docs</button>
</>
    )
}

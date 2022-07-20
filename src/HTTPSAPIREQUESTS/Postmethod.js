import React from 'react'
import axios from 'axios'


const Postmethod = () => {

const postRequest = async () =>{
    const newList = {
        name : "saikumar",
        id : 2,
    }
    try{
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", newList)
        console.log(response, "response in axios")
    }catch(err){
        console.error(err)
    }
}
// useEffect(()=>{
//     postRequest();
// },[])

  return (
    <>
        <h1>Postmethod</h1>
        <button onClick={() => postRequest()}>submit</button>
    </>
  )
}

export default Postmethod

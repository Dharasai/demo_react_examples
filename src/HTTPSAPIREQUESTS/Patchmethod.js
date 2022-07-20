import React from 'react'
import axios from 'axios'



const Patchmethod = () => {

// this is the method which is used for update and modifies the data
// it will change the perticular key and value only and if we ad new key it will update that in that present object
    const patchRequest = async () =>{
        const newData = {
            id: 2,
            name: "saikumar"
        }
        try{
            const response = await axios.patch("https://jsonplaceholder.typicode.com/posts/2", newData)
            console.log(response, "patchMethod")
        }catch(err){
            console.error(err)
        }
    }
  return (
    <>
        <h1>Patchmethod</h1>
        <button onClick={()=>{patchRequest()}}>Patchmethod</button>
    </>
  )
}

export default Patchmethod
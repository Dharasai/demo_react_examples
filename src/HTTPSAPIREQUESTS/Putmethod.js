import React from 'react'

import axios from 'axios'


const Putmethod = () => {

    const putRequest = async () =>{

        //  this the method is used for update the whole object
        const updateData = {
            "id": 1,
            "username" : "saikumar"
        }
        try{
            const resp = await axios.put("https://jsonplaceholder.typicode.com/posts/1",updateData)
            console.log(resp, "response in axios")
        }catch(err){
            console.error(err);
        }
    }
  return (
    <>
        <h2>Putmethod</h2>
        <button onClick={()=> putRequest()}>submit</button>
    </>
  )
}

export default Putmethod
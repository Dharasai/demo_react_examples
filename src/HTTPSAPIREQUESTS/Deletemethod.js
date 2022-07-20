import React from 'react'


import axios from 'axios'



const Deletemethod = () => {


const deleteRequest = async () =>{
//    we have to pass the  posts/${1} for delete that object
    try{
        const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        console.log(response, "deletemtd")
    }catch(err){
console.error(err)
    }
}

  return (
    <>
        <h2>Deletemethod</h2>
        <button onClick={()=> deleteRequest()}>Submit</button>
    </>
  )
}

export default Deletemethod
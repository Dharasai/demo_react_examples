import React from 'react'
import UseInput from './UseInput'

import { useRef } from 'react';

const Signin = () => {

const name = UseInput('');
const password = UseInput('');

const ref =useRef(null)


const submitHandler = (e) =>{
      e.preventDefault();
      console.log(name.value ," userNAME")
      console.log(password.value," password")

    }
  
    const handleRef = () =>{
      ref.current.focus();
    }
  return (
    <>

    <h1 onClick={handleRef}>Form</h1>
    <input type="text" value='' ref={ref} />


    <div className="row">
        <form onSubmit={submitHandler}>
            <label>Name :</label>
            <input 
            name="name" 
            type="text"
            {...name}
           />
            <br />
            <label>Password :</label>
            <input 
           {...password}
            name="name" 
            type="password"/>
            <button type="submit">Submit</button>
        </form>
    </div>
</>
  )
}

export default Signin



























// import React, { useState } from 'react'

// const Signin = () => {

// const [name, setName] = useState('');
// const [password, setPassword] = useState('');

//   const submitHandler = (e) =>{
//     e.preventDefault();
//     console.log(name ,"  SubmitHandler", password)
//   }

//   return (
    // <>
    //     <h1>Form</h1>
    //     <div className="row">
    //         <form onSubmit={submitHandler}>
    //             <label>Name :</label>
    //             <input name="name" type="text" value ={name} onChange={(e) => setName(e.target.value)}/>
    //             <br />
    //             <label>Password :</label>
    //             <input name="name" type="password" value ={password}  onChange={(e) => setPassword(e.target.value)}/>
    //             <button type="submit">Submit</button>
    //         </form>
    //     </div>
    // </>
//   )
// }

// export default Signin
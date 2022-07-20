import React from 'react'

import UseInput from './UseInput';
const Register = () => {

const userName = UseInput('');
const email = UseInput('');
const address = UseInput('');
const number = UseInput('');

const submitHandler = (e) =>{
    e.preventDefault();
    console.log(userName.value,"userName");
    console.log(email.value,"email");
    console.log(number.value,"number");
    console.log(address.value,"address");
}

  return (
    <>
        <h3>Register</h3>
        <div className="row">
        <form onSubmit={submitHandler}>
            <label>Name :</label>
            <input 
            name="userName" 
            type="text"
            {...userName}
           />
             <br />
            <label>Email :</label>
            <input 
           {...email}
            name="email" 
            type="email"/>
            <br />
            <label>Address :</label>
            <input 
            name="Address" 
            type="text"
            {...address}
           />
            <br />
            <label>Mobile Number :</label>
            <input 
           {...number}
            name="number" 
            type="number"/>
            <button type="submit">Submit</button>
        </form>
    </div>
    </>
  )
}

export default Register
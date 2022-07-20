import React, { useEffect, useState } from 'react'

import axios from 'axios';


const Getmethod = () => {

    const [data, setData] = useState([]);


    const getRequest= async () => {
        try{
          const response = await axios.get("https://jsonplaceholder.typicode.com/todokps/");
          console.log(response);
          setData(response.data)
        }catch(err){
          console.error(err)
        }
        
      };

// 
useEffect(()=>{
  const options = {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
    params: {i: 'Gin'},
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data,"food api");
  }).catch(function (error) {
    console.error(error);
  });
},[])

// 



      useEffect(()=>{
        getRequest();
      },[])
  return (
    <>
    <h1>Getmethod</h1>
    {data.map((item)=> <p key={item.id}>{item.title}..............</p>)}
     
   

    </>
  )
}

export default Getmethod
import React,{useEffect, useState} from 'react'
import {db }from '../FireBase/fireBase'
import { collection, getDocs } from 'firebase/firestore';

const SearchFilter = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const userCollectionRef = collection(db, "testresults")

    const getFireBaseData = async () =>{
        const user = await getDocs(userCollectionRef);
        // console.log(user,"userdata");
        setData(user.docs.map((val) => ({...val.data(),id:val.id})));
    }
    console.log(data,"data")

    useEffect(()=>{
        getFireBaseData();
    },[])

  return (
    <div>
    <input type="text" placeholder="Search User..." onChange={(e) =>{setSearch(e.target.value)}}/>
    {data.filter((value)=>{
        if(value === ""){
            return value ;
        }else if(value.name.toLowerCase().includes(search.toLowerCase())){
            return value ;
        }
    }).map((val)=>{
        return (
            <>
            <div key={val.id}>
            <p>{val.name}</p>

            </div>
            </>
        )
    })}
    <p></p>
    </div>
  )
}

export default SearchFilter
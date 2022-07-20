import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { quizData } from './QuizData';
import './quizApp.css'

// import { getAnalytics } from "firebase/analytics";
import {db} from '../FireBase/fireBase';
import {collection} from 'firebase/firestore';

const Quiz = () => {
    const [input, setInput] = useState([]);
    const [num , setNum] = useState(1);
  const userCollectionRef = collection(db, "testresults");


    const cardStyles = {
        backgroundColor: '#f2e9ce',
        borderRadius: 2,
        width: 500,
        height: 200,
    }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

   const submitHandler = (e) =>{
    e.preventDefault();
    console.log('submitHandler', input)
    postRequest(input)
   }


    console.log('input value', input)




    const postRequest = async (data) =>{
      
        try{
            const response = await axios.post("https://whatsapp-c7e76-default-rtdb.firebaseio.com/", data)
            console.log(response, "response in axios")
        }catch(err){
            console.error(err)
        }
    }


    return (
        <>
            <div className="container">
                <h1>Quiz</h1>
                {quizData.slice(num -1,num).map((item) => <form onSubmit={submitHandler}>
                    <ul style={cardStyles} key={item.id}>
                        <h3> Q {item.id} :  {item.question}</h3>
                        <li>
                            <label htmlFor="a" > A.
                                <input type="radio" name="quiz_answers" value={item.a} onChange={handleChange}  />
                               {item.a}
                            </label>
                        </li>
                        <li>
                            <label htmlFor="b" >B.
                                <input type="radio" name="quiz_answers" onChange={handleChange} value={item.b} />
                               {item.b}
                            </label>
                        </li>
                        <li>
                            <label htmlFor="c" >C.
                                <input type="radio" name="quiz_answers" onChange={handleChange} value={item.c} />
                               {item.c}
                            </label>
                        </li>
                        <li>
                            <label htmlFor="d" >D.
                                <input type="radio" name="quiz_answers" onChange={handleChange}  value={item.d} />
                               {item.d}
                            </label>
                        </li>
                        <button type="submit"> Submit</button>         
                        &nbsp;               
                        &nbsp;               
                        &nbsp;               
                        <button type="button"onClick={() => setNum(num+1)}> Next</button>                        

                    </ul>

                </form>)}
            </div>
        </>
    )
}

export default Quiz


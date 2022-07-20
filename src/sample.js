import React,{useState} from 'react'

const Sample = () => {

    const [data,setData] = useState('')
  return (

    <div>
      <p>
          {data}
      </p>
      <button onClick={()=>{setData('im userdata')}}>datasetter</button>
    </div>
  )
}

export default Sample

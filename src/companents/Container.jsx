import React from 'react'
import Card from './Card'
import{data} from "../data.js"
  
console.log(data)

const Container = () => {

   
  return (
    <div className='container'>

    {data.map((veri,index)=> <Card {...veri} key={index}/>)}
   

      
    </div>
  )
}

export default Container

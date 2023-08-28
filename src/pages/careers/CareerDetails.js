import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    const { id } = useParams()
    const career = useLoaderData()
    return (
        <div className='career-details'>
          <h2>career Details for {career.title}</h2>
          <p>starting salary:{career.salary}</p>
          <p>Location:{career.location}</p>
          <div className='details'>
          <p>eheupfhurecrevpureuvbvbufybvufebhcbd</p> 
          </div>
        </div>
    )
}


export const careerDetailsLoader=async({ params })=>{
  const { id }=params
  const res=await fetch('http://localhost:4000/careers/'+id)
  if(!res.ok)
  {
    throw Error('could not find that career')

  }
 return res.json()
}
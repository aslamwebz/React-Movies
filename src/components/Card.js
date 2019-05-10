import React from 'react'
import {Link} from 'react-router-dom'
import {IMAGE_PATH} from '../actions/config'


export default function Card(data) {
  const movie = `/movie/${data.data.id}`
  return (
   <div className="" id="card">
   <Link to={movie}>
      {data.data.poster_path ? <img src={IMAGE_PATH + data.data.poster_path } alt={data.data.title} />:<img src="https://www.classicposters.com/images/nopicture.gif" alt="not found" />}
      <span className="centered">{data.data.title.length > 25 ? data.data.title = data.data.title.substring(0,25):data.data.title }</span>
      </Link>
   </div>
  )
}
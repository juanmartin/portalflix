import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import playIcon from '../assets/svg/but_play.svg'

export default function VideoThumbnail(props) {
  const img = require('../assets/content/' + props.thumbnail).default
  const linkStr = props.titulo.replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() // saca espacios y pone - tambien saca tildes
  const location = useLocation()

  return (
    <article className="w-auto h-60">
      <div style={{ backgroundImage: `url(${img})` }} className="w-full h-full relative bg-no-repeat bg-cover">
        <Link
          to={{
            pathname: '/' + linkStr,
            state: {
              background: location,
              video: props
            }
          }}>
          <button
            style={{ backgroundImage: `url(${playIcon})` }}
            className="absolute w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none transition duration-200 ease-in-out hover:scale-110"
          ></button>
        </Link>
      </div>
      <h3 className="font-bold text-white mt-2">{props.titulo}</h3>
    </article>
  )
}

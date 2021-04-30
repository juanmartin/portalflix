import React from 'react'
import playIcon from '../assets/svg/but_play.svg'

export default function Video(props) {
  const img = require('../assets/content/' + props.thumbnail).default
  return (
    <article className="w-80 h-60">
      <div style={{ backgroundImage: `url(${img})` }} className="w-full h-full relative">
        <button style={{ backgroundImage: `url(${playIcon})` }} className="absolute w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></button>
      </div>
      <h3 className="font-bold text-white mt-2">{props.titulo}</h3>
    </article>
  )
}

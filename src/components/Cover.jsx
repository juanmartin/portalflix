import React from 'react'

export default function Cover(props) {
  return (
    <div>
      <img src={props.coverImg} alt={props.pelicula} className="absolute w-full" />
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
    </div>
  )
}

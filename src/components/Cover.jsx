import React from 'react'
import infoIcon from '../assets/svg/info.svg'

export default function Cover(props) {
  const logo = require('../assets/content/' + props.logo).default
  const cover = require('../assets/content/' + props.cover).default

  return (
    <article className="w-full h-full z-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${cover})` }}>
      <div className="bg-gradient-to-t from-black to-transparent pb-28">
        <div className="space-y-5 px-5 md:px-0 pt-44 w-full md:w-96 md:ml-44">
          <img src={logo} alt={props.pelicula} />
          <h3 className="text-white font-bold text-xl">{props.titulo}</h3>
          <p className="text-white text-lg">{props.descripcion}</p>
          <button className="bg-white text-black font-bold rounded-md p-3 flex gap-2 align-middle whitespace-nowrap focus:outline-none hover:bg-gray-200">
            <img src={infoIcon} alt="info" /> Más información
          </button>
        </div>
      </div>
    </article>
  )
}

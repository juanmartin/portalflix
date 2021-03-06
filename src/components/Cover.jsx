import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import infoIcon from '../assets/svg/info.svg'

export default function Cover(props) {
  const logo = require('../assets/content/' + props.logo).default
  const cover = require('../assets/content/' + props.cover).default
  const linkStr = props.titulo.replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() // saca espacios y pone - tambien saca tildes
  const location = useLocation()

  return (
    <article className="w-full h-full z-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${cover})` }}>
      <div className="h-full bg-gradient-to-t from-black to-transparent pb-28">
        <div className="space-y-5 px-5 md:px-0 pt-44 w-full md:w-96 md:ml-44">
          <img src={logo} alt={props.pelicula} />
          <h3 className="text-white font-bold text-xl">{props.titulo}</h3>
          <p className="text-white text-lg">{props.descripcion}</p>
          <Link
            to={{
              pathname: '/' + linkStr,
              state: {
                background: location,
                video: props
              }
            }}
          >
            <button
              className="flex gap-2 mt-7 align-middle bg-white text-black font-bold rounded-md p-3 whitespace-nowrap focus:outline-none hover:bg-gray-200"
            >
              <img src={infoIcon} alt="info" /> Más información
          </button>
          </Link>
        </div>
      </div>
    </article >
  )
}

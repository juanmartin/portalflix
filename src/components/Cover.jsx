import React from 'react'
import infoIcon from '../assets/svg/info.svg'

import logo from '../assets/content/01_Toy_title.png'
import coverImg from '../assets/content/01_Toy_cover.jpg'

export default function Cover(props) {
  const imgDir = '../assets/content/'

  return (
    <article className="w-full h-full z-0 -mt-20 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${coverImg})` }}>
      <div className="bg-gradient-to-t from-black to-transparent pb-28">
        <div className="space-y-5 px-10 md:px-0 pt-40 w-full md:w-96 md:ml-32">
          <img src={logo} alt="toystory" className="" />
          <h3 className="text-white font-bold text-xl">Toy Story</h3>
          <p className="text-white text-lg">El Oso recibe a los principales personajes de la saga y nos muestra a todos dos de los accesos directos que se encuentran en el nuevo Portal. Beneficios y Yammer.</p>
          <button className="bg-white text-black font-bold rounded-md p-3 flex gap-2 align-middle whitespace-nowrap focus:outline-none hover:bg-gray-200">
            <img src={infoIcon} alt="info" /> Más información
          </button>
        </div>
      </div>
    </article>
  )
}

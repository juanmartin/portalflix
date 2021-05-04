import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'

export default function Modal() {
  const data = useLocation().state.video
  const history = useHistory()
  const { slug } = useParams()
  const logo = require('../assets/content/' + data.logo).default
  document.body.style.overflow = "hidden"

  const closeModal = e => {
    e.stopPropagation()
    history.goBack()
  }

  React.useEffect(() => {
    return (() => {
      document.body.style.overflow = "auto"
    })
  })

  return (
    <div
      className="fixed z-50 w-full h-screen overflow-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 bg-blend-darken"
      role="button"
      onClick={closeModal}
    >
      <div
        className="w-11/12 xl:w-3/5 mt-10 mx-auto"
        role="button"
        onClick={e => e.stopPropagation()}
      >
        <video controls autoPlay className="mx-auto" width="100%" height="auto">
          <source src={window.location.origin + '/videos/' + slug + '.mp4'} type="video/mp4" />
        </video>
        <div className="lg:flex items-center">
          <img src={logo} alt={data.pelicula} className="max-w-md object-contain mx-auto" />
          <div>
            <h2>{data.titulo}</h2>
            <p className="text-white">{data.descripcion}</p>
          </div>
        </div>


      </div>

    </div>
  )
}

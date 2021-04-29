import React from 'react'
import logo_portalflix from '../assets/svg/LogoP.svg'
import logo_sancor from '../assets/svg/LogoS.svg'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center w-1/4 space-y-2">
      <img src={logo_portalflix} alt="logo Portalflix" className="w-16" />
      <div className="flex gap-3">
        <p className="text-gray-400 text-sm">Un portal de</p>
        <img src={logo_sancor} alt="logo Sancor Seguros" className="w-16" />
      </div>
      <p className="text-gray-400 text-sm">Sancor Seguros S.A. - 2021. Todos los derechos reservados.</p>
    </footer>
  )
}

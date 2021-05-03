import React from 'react'
import logo_portalflix from '../assets/svg/LogoP.svg'
import logo_sancor from '../assets/svg/LogoS.svg'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center w-96 space-y-2 mt-10 pb-6">
      <img src={logo_portalflix} alt="logo Portalflix" className="w-24" />
      <div className="flex gap-3">
        <p className="text-gray-400 text-sm">Un portal de</p>
        <a href="https://www.sancorseguros.com.ar/" target="_blank" rel="noreferrer"><img src={logo_sancor} alt="logo Sancor Seguros" className="w-16" /></a>
      </div>
      <p className="text-gray-400 text-sm">Sancor Seguros S.A. - 2021. Todos los derechos reservados.</p>
    </footer>
  )
}

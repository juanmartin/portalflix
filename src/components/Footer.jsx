import React from 'react'
import logo_portalflix from '../assets/svg/LogoP.svg'
import logo_sancor from '../assets/svg/LogoS.svg'

export default function Footer() {
  return (
    <div className="flex flex-col justify-center">
      <img src={logo_portalflix} alt="logo Portalflix" />
      <div className="flex gap-3">
        <p>Un portal de</p>
        <img src={logo_sancor} alt="logo Sancor Seguros" />
      </div>
      <p>Sancor Seguros S.A. - 2021. Todos los derechos reservados.</p>
    </div>
  )
}

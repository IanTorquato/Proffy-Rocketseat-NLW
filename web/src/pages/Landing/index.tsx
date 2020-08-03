import React from 'react'

import './styles.css'
import imgLogoProffy from '../../assets/images/logo.svg'
import imgLanding from '../../assets/images/landing.svg'
import iconStudy from '../../assets/images/icons/study.svg'
import iconGiveClasses from '../../assets/images/icons/give-classes.svg'
import iconPurpleHeart from '../../assets/images/icons/purple-heart.svg'

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={imgLogoProffy} alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={imgLanding} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <a href="#" className="study">
            <img src={iconStudy} alt="Estudar" />
          Estudar
        </a>

          <a href="#" className="give-classes">
            <img src={iconGiveClasses} alt="Dar aulas" />
          Dar aulas
        </a>
        </div>

        <span className="total-connections">
          Total de 180 conexões já realizadas <img src={iconPurpleHeart} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing
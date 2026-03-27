import React from 'react'
import profil from '../assets/images/profil.png'
import { FaLongArrowAltRight } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className='hero'>
      <div className="box_hero">
        {/* gauche */}
        <div className="hero_gauche">
          <h1>Je suis Developpeur</h1>
          <h2>Front-End</h2>
          <p>
            Je transforme des idées complexes en interfaces élégantes, rapides et mémorables. Du code au pixel, du montage à l'écran — j'assure.
          </p>
          <div className="hero_btn">
            <button className='hero_btn1' onClick={() => navigate('/projets')}>
              Voir mes projets
              <FaLongArrowAltRight />
            </button>
            <button className='hero_btn2' onClick={() => navigate('/contact')}>
              Me contacter
            </button>
          </div>
        </div>

        {/* droite */}
        <div className="hero_droite">
          <img src={profil} alt="profil" />
        </div>
      </div>
    </div>
  )
}

export default Hero
import React from 'react'

import Slider from 'react-slick'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

import "../../styles/hero-slider.css";

const HeroSlider = () => {
    const settings = {
        fade:true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll:1,
        pauseOnHover: false,
    }
  return <Slider {...settings} className='hero__slider'>

    <div className="slider__item slider__item-01 mt0">
        <Container>
            <div className="slider__content">
                <h4 className="text-light mb-3">À Louer 450DH Par Jour</h4>
                <h2 className='text-light mb-4'>Réservez Maintenant Et Obtenez 50% De Réduction</h2>

                <button className="btn reserve__btn mt-4">
                    <Link to='/cars'>Réservez Maintenant</Link>
                </button>
            </div>
        </Container>
    </div>

    <div className="slider__item slider__item-02 mt0">
        <Container>
            <div className="slider__content">
                <h6 className="text-light mb-3">À Louer 450DH Par Jour</h6>
                <h2 className='text-light mb-4'>Réservez Maintenant Et Obtenez 50% De Réduction</h2>

                <button className="btn reserve__btn mt-4">
                    <Link to='/cars'>Réservez Maintenant</Link>
                </button>
            </div>
        </Container>
    </div>

    <div className="slider__item slider__item-03 mt0">
        <Container>
            <div className="slider__content">
                <h6 className="text-light mb-3">À Louer 450DH Par Jour</h6>
                <h2 className='text-light mb-4'>Réservez Maintenant Et Obtenez 50% De Réduction</h2>

                <button className="btn reserve__btn mt-4">
                    <Link to='/cars'>Réservez Maintenant</Link>
                </button>
            </div>
        </Container>
    </div>

    <div className="slider__item slider__item-04 mt0">
        <Container>
            <div className="slider__content">
                <h6 className="text-light mb-3">À Louer 450DH Par Jour</h6>
                <h2 className='text-light mb-4'>Réservez Maintenant Et Obtenez 50% De Réduction</h2>

                <button className="btn reserve__btn mt-4">
                    <Link to='/cars'>Réservez Maintenant</Link>
                </button>
            </div>
        </Container>
    </div>

    <div className="slider__item slider__item-05 mt0">
        <Container>
            <div className="slider__content">
                <h6 className="text-light mb-3">À Louer 450DH Par Jour</h6>
                <h2 className='text-light mb-4'>Réservez Maintenant Et Obtenez 50% De Réduction</h2>

                <button className="btn reserve__btn mt-4">
                    <Link to='/cars'>Réservez Maintenant</Link>
                </button>
            </div>
        </Container>
    </div>

  </Slider>
}

export default HeroSlider
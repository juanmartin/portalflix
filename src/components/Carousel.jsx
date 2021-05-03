import React from 'react'
import Cover from './Cover'
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import backBtnImg from '../assets/svg/but_back.svg'
import nextBtnImg from '../assets/svg/but_next.svg'

export default function Carousel(props) {
  return (
    <div>
      <CarouselProvider
        totalSlides={props.videos.length}
        naturalSlideWidth={1920} // w de las imagenes
        naturalSlideHeight={700} // h de las imagenes
        isPlaying
        infinite
        isIntrinsicHeight
      >
        <Slider
          classNameAnimation="carouselAnimation"
        >
          {props.videos.map((video, index) => {
            return (
              <Slide key={index} index={index} >
                <Cover logo={video.logo} cover={video.cover} pelicula={video.pelicula} titulo={video.titulo} descripcion={video.descripcion} />
              </Slide>
            )
          })}
        </Slider>
        <ButtonBack style={{backgroundImage: `url(${backBtnImg})`}} className="sm:w-8 h-12 bg-contain bg-no-repeat absolute top-1/2 transform -translate-y-36 left-10 focus:outline-none transition duration-200 ease-in-out hover:scale-110"></ButtonBack>
        <ButtonNext style={{backgroundImage: `url(${nextBtnImg})`}} className="sm:w-8 h-12 bg-contain bg-no-repeat absolute top-1/2 transform -translate-y-36 right-10 focus:outline-none transition duration-200 ease-in-out hover:scale-110"></ButtonNext>
      </CarouselProvider>
    </div>
  )
}

import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Movie} from '../components/Home';
import { Link } from 'react-router-dom';
import { MovieDetails } from './Detail';

type CarouselProps = ({items: Movie[], className?: string})

export const CarouselC = ({items}: CarouselProps) => {

  console.log(items)

    return(
    <>
    <Carousel className="carousel-comp col-12" slide={false} interval={100000}>
        {items.map((item,index) => (
            <Carousel.Item key={index} className="carousel-c">
            <Link to={'/home/' + item?.imdbID} state={{film: item?.imdbID}}>
              <div className="ab1" style={{backgroundImage: 'url('+item?.Poster + ')'}}/> 
            </Link>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        ) )}
        </Carousel>
        </>
        )
    }
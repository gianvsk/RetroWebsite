import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import '../style/style.css'
import {ContainerC} from '../components/Container';
import '../style/style.css'
import {useMovie} from '../hooks/CustomHook';
import { CarouselC } from './Carousel';
import { CardContainerC } from './CardContainer';
import { FilmDetails, MovieDetails } from './Detail';
import { faCoffee, faArrowRightFromBracket, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const token = 'ef5ace00';
export const url = 'http://www.omdbapi.com/?apikey='


export type Movie = {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}

export const Home = () => {

    const [text, setText] = useState<string>("movie")
    const [movies, setMovies, page ,setPage] = useMovie(text)

    const location = useLocation()
    const {textButton}  = location.state ?? {} // permette di ottere un valore da useLocation anche se undefined
    const locationPref = useLocation()
    const {film} = locationPref.state ?? {}
    const locationSearch = useLocation()
    const {filmSearched} = locationSearch.state ?? {}

    const element = <FontAwesomeIcon icon="arrow-right" />

    useEffect(() => {
      if(textButton !== undefined) setText(textButton)
      }, [textButton]);

      useEffect(() => {
        if(filmSearched !== undefined) setText(filmSearched)
        }, [filmSearched]);

    return(
      <>
      {film && <Outlet/>}  
        
       {!film &&
                      <div className="padding-0">
                        <CarouselC items={movies}/> 
                        <div className="justify-content-space-around">
                          <Button className='card-button-1' onClick={() => setPage(Math.max(page-1, 1))}><FontAwesomeIcon icon={faArrowAltCircleLeft} size='xl' /></Button> 
                          <Button className='card-button-1' onClick={() => setPage(page+1)}><FontAwesomeIcon icon={faArrowAltCircleRight} size='xl' /></Button>
                        </div>
                        <CardContainerC items={movies}/>
                      </div>
                  }        
        </>
    )
}


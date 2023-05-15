import React, { useEffect, useState } from 'react';
import {Link, Outlet, useLocation } from 'react-router-dom'
import {url, token} from '../components/Home';
import { Card, Container } from 'react-bootstrap';
import '../style/style.css'
import { CardDetailC } from './CardDetails';
import { CardC } from './CardCarousel';

export type FilmDetails = {
    Actors: string, 
    Awards: string, 
    Country: string, 
    Director: string, 
    Genre: string, 
    Language: string, 
    Metascore: string, 
    Plot: string, 
    Poster: string, 
    Rated: string, 
    Ratings: [{
        Source: string,
        Value: string
    }]
    Released: string, 
    Response: string, 
    Runtime: string, 
    Title: string, 
    Type: string, 
    Writer: string, 
    Year: string, 
    imdbID: string, 
    imdbRating: string, 
    imdbVotes: string, 
    totalSeasons: string
}

export type MovieDetails = {
    Actors: string,
    Awards:string,
    BoxOffice: string,
    Country: string,
    DVD: string,
    Director: string,
    Genre: string,
    Language: string,
    Metascore: string,
    Plot: string,
    Poster: string,
    Production: string,
    Rated: string,
    Ratings: [{
        Source: string,
        Value: string
    }],
    Released: string,
    Response: string,
    Runtime: string,
    Title: string,
    Type: string,
    Website: string,
    Writer: string,
    Year: string,   
    imdbID: string,
    imdbRating: string,
    imdbVotes: string
}

export const Detail = () => {
    const location = useLocation()
    const { film } = location.state ?? {}

    const [actualFilm, setActualFilm] = useState<FilmDetails>()

    useEffect(() => {
        fetch(url + token + `&i=${film}`)
        .then((response) => response.json())
        .then(data => setActualFilm(data))
        .catch(err => console.error('error:' + err))}, []);

        return (
            <>
            <Container className="container-fluid flex-center-details">
                <CardC item={actualFilm!} key={film}/>
            </Container>
            <Outlet/>
            </>
        )
    }
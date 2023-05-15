import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import {Movie} from './Home';
import { FilmDetails, MovieDetails } from './Detail';

type CardProps = ({item: Movie})

export const CardC = ({item} : CardProps) => {

    return (
        <>
        {console.log("Film: " + item?.Title)}
        <Card className='card-style col-10 col-sm-5 col-lg-3 col-xl-2'>
        <Link to={'/home/' + item?.imdbID} state={{film: item?.imdbID}}>
        <div className="ab2" style={{backgroundImage: 'url('+item?.Poster + ')'}}/>
        </Link>
        <Card.Body className="card-body-a">
        <Card.Title>{item?.Title}</Card.Title>
            <p className='cardC-text'>Genre: {item?.Type} | Released: {item?.Year}</p>
        <Link to={'/details'} state={{film: item?.imdbID}}><div className="card-button">More</div></Link>
        </Card.Body>
        </Card>
        </>
    )
    }
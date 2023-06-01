import React from 'react';
import { Movie } from './Home';
import { Card } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

type CardIdProps = ({item: Movie})

export const CardId = ({item} : CardIdProps) => {

    return (
        <>
        {console.log("Film: " + item?.Title)}
        <Card className='card-style col-10 col-sm-5 col-lg-3 col-xl-2'>
             <div className="ab2" style={{backgroundImage: 'url('+item?.Poster + ')'}}/>
            <Card.Body className="card-body-a">
                <Card.Title>{item?.Title}</Card.Title>
                    <p className='cardC-text'>Genre: {item?.Type} | Released: {item?.Year}</p>
                    <Link to={'details'}  state={{film: item?.imdbID, filmDetails: true}}><div className="card-button">More</div></Link>
            </Card.Body>
        </Card>
        </>
    )
    }
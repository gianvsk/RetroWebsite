import React from 'react';
import {Movie} from '../components/Home';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardC } from './CardCarousel';
import { FilmDetails, MovieDetails } from './Detail';

type CardContainerProps = ({items: Movie[]})

export const CardContainerC = ({items}: CardContainerProps) => {
    return(
        <>
        <div className='d-flex marginCardContainer row'>
        {items.map((item,index) => (
            <CardC key={index} item={item}/>
        ))}
        </div>
        </>
    )
}
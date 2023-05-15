import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Movie } from './Home';
import { FilmDetails } from './Detail';
import {url, token} from '../components/Home';

export const DetailCardC = () => {
    const location = useLocation()
    const { film } = location.state ?? {}

    const [item,setItem] = useState<FilmDetails>()

    useEffect(() => {
        fetch(url + token + `&i=${film}`)
        .then((response) => response.json())
        .then(data => setItem(data))
        .catch(err => console.error('error:' + err))}, []);
   
    return (
        <>
        <div className="flex-center">        
        <Card className='card-details col-8'>
          <div className="ab2" style={{backgroundImage: 'url('+item?.Poster + ')'}}/>
            <Card.Body className='card-body-details'>
              <Card.Title>{item?.Title}</Card.Title>
              <Card.Text className="card-details">
              Actors: {item?.Actors} Awards: {item?.Awards} , Country: {item?.Country} , Director: {item?.Director}, Genre: {item?.Genre}, 
              Language: {item?.Language}, Plot: {item?.Plot}, Rated: {item?.Rated}, Released: {item?.Released},  Runtime: {item?.Runtime },
              Type: {item?.Type}, Writer: {item?.Writer}, Year: , {item?.Year}
              </Card.Text>
              <Link to={'/home'} state={{filmSaved: item?.imdbID, typeSaved: item?.Type}}><div className="card-button">Torna alla home</div></Link>
            </Card.Body>
          </Card>
          </div>
          </>
    )
    }
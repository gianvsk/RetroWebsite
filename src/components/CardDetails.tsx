import React from 'react';
import {Movie} from '../components/Home';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FilmDetails } from './Detail';

type CardProps = ({item: FilmDetails})

export const CardDetailC = ({item} : CardProps) => {
    return (
/*         <>
        <Card className='card-details col-8'>
          <div className="ab" style={{backgroundImage: 'url('+item?.Poster + ')'}}/>
            <Card.Body className='card-body-details'>
              <Card.Title>{item?.Title}</Card.Title>
              <Card.Text className="card-details">
              Actors: {item?.Actors} Awards: {item?.Awards} , Country: {item?.Country} , Director: {item?.Director}, Genre: {item?.Genre}, 
              Language: {item?.Language}, Plot: {item?.Plot}, Rated: {item?.Rated}, Released: {item?.Released},  Runtime: {item?.Runtime },
              Type: {item?.Type}, Writer: {item?.Writer}, Year: {item?.Year}
              </Card.Text>
              <Link to={'/home'} state={{filmSaved: item?.imdbID, typeSaved: item?.Type}}><div className="card-button">Torna alla home</div></Link>
            </Card.Body>
          </Card>
          </> */

          <>
          {console.log("Film: " + item?.Title)}
          <Card className='card-style col-10 col-sm-5 col-lg-3 col-xl-2'>
          <Link to={'/home/' + item?.imdbID} state={{film: item?.imdbID}}>
          <div className="ab2" style={{backgroundImage: 'url('+item?.Poster + ')'}}/>
          </Link>
          <Card.Body className="card-body-b">
          <Card.Title>{item?.Title}</Card.Title>
              <p className='cardC-text'>Genre: {item?.Type} | Released: {item?.Year} | Actors: {item?.Actors}
              | Awards: {item?.Awards} | Country: {item?.Country} | Director: {item?.Director} | Genre: {item?.Genre}
              | Language: {item?.Language} |  Plot: {item?.Plot} | Rated: {item?.Rated} | Released: {item?.Released} | Runtime: {item?.Runtime }
              | Type: {item?.Type} | Writer: {item?.Writer} | Year: {item?.Year}</p>
          <Link to={'/details'} state={{film: item?.imdbID}}><div className="card-button">More</div></Link>
          </Card.Body>
          </Card>
          </>
    )
    }
import React, { useEffect, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Movie } from './Home';
import { FilmDetails } from './Detail';
import {url, token} from '../components/Home';

export const DetailCardC = () => {
    const location = useLocation()
    const { film } = location.state ?? {}

    const [item,setItem] = useState<FilmDetails>()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch(url + token + `&i=${film}`)
        .then((response) => response.json())
        .then(data => setItem(data))
        .catch(err => console.error('error:' + err))}, []);
   
    return (
        <>
        <div className="flex-center" onClick={handleShow}>        
        <Card className='card-details col-8'>
          <div className="ab2" style={{backgroundImage: 'url('+item?.Poster + ')'}}/>
            <Card.Body className='card-body-details'>
              <Card.Title className=''>{item?.Title}</Card.Title>
              <Card.Text className="card-details">
                <ul>
                  <li>Actors: {item?.Actors}</li> 
                  <li>Awards: {item?.Awards}</li> 
                  <li>Country: {item?.Country}</li>
                  <li>Director: {item?.Director} </li>
                  <li>Genre: {item?.Genre}</li>
                  <li>Language: {item?.Language}</li>
                  <li>Plot: {item?.Plot}</li>
                  <li>Rated: {item?.Rated}</li>
                  <li>Released: {item?.Released}</li>
                  <li>Runtime: {item?.Runtime }</li>
                  <li>Type: {item?.Type} </li>
                  <li>Writer: {item?.Writer} </li>
                  <li>Year: {item?.Year}</li>
                </ul>
              </Card.Text>
              <Link to={'/home'} state={{filmSaved: item?.imdbID, typeSaved: item?.Type}}><div className="card-button">Torna alla home</div></Link>
            </Card.Body>
          </Card>
          </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
        <Modal.Body>        <div className="flex-center">        
        <Card className='card-details col-8'>
          <div className="ab2" style={{backgroundImage: 'url('+item?.Poster + ')'}}/>
            <Card.Body className='card-body-details'>
              <Card.Title className=''>{item?.Title}</Card.Title>
              <Card.Text className="card-details">
                <ul>
                  <li>Actors: {item?.Actors}</li> 
                  <li>Awards: {item?.Awards}</li> 
                  <li>Country: {item?.Country}</li>
                  <li>Director: {item?.Director} </li>
                  <li>Genre: {item?.Genre}</li>
                  <li>Language: {item?.Language}</li>
                  <li>Plot: {item?.Plot}</li>
                  <li>Rated: {item?.Rated}</li>
                  <li>Released: {item?.Released}</li>
                  <li>Runtime: {item?.Runtime }</li>
                  <li>Type: {item?.Type} </li>
                  <li>Writer: {item?.Writer} </li>
                  <li>Year: {item?.Year}</li>
                </ul>
              </Card.Text>
              <Link to={'/home'} state={{filmSaved: item?.imdbID, typeSaved: item?.Type}}><div className="card-button">Torna alla home</div></Link>
            </Card.Body>
          </Card>
          </div></Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
          </>
    )
    }
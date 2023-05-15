import React, { useEffect, useState } from 'react';
import {url, token, Movie} from '../components/Home'
import {useLocation} from 'react-router-dom'

export const useMovie = (movie : string) => {

    const [films, setFilms] = useState<Movie[]>([])
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        console.log("try2")
        fetch(url + token + `&s=${movie}&page=${page}`)
        .then((response) => response.json())
        .then((data) => setFilms(data.Search))
        .catch(err => console.error('error:' + err))}, [movie,page]);

        return [films, setFilms, page, setPage] as [Movie[], Function, number, Function]
    }
    
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const SearchC = () => {

    const[inputText, setInputText] = useState<string>();

    return(
    <div className="search">
        <div className="search-container">
        <h2>Insert movie name</h2>
        <input className='search-bar' placeholder='Insert film name' onChange={(e) => setInputText(e.target.value)}/>
        <Link to="/home" state={{filmSearched: inputText }}>Find it</Link>
        </div>
    </div>)
}
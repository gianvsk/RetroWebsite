import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../App';

export const Footer = () => {

    const footerContext = useContext(MyContext)

    const [footerTheme, setFooterTheme] = useState('theme-light-footer')

    useEffect(() => {
        setFooterTheme(footerContext?.theme === 'dark' ? 'theme-dark-footer' : 'theme-light-footer')
    }, [footerContext?.theme] )

    return (
        <footer className={`footer col-12 row ${footerTheme}`}>
            <article className='col-4 footer-c1'>
                <div className='footer-div1'>
                    <p>This website has been created by myself. The design has been choosen to build it with a retro-game style.</p>
                </div>
            </article>
            <article className='col-4 footer-c2'>
                <p>APIs have been take from OMDb API - The Open Movie Database</p>
            </article>
            <article className='col-4 footer-c1'>
                <div className='footer-div2'>
                    <p>This was a school project that I'm continuing to improve my skills as Front-End Dev. and to increase my React.js knowledge</p>
                </div>
            </article>
        </footer>
    )

}
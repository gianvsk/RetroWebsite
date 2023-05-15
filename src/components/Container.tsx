import React from 'react';
import '../style/style.css'
import {CarouselC} from '../components/Carousel';
import {Movie} from '../components/Home';
import { CardContainerC } from './CardContainer';

type ContainerProps = ({children: JSX.Element, className: string, items?: Movie[]})
// Non utilizzato per ora
export const ContainerC = ({children}: ContainerProps) => {
    return(
    <>
    <div className='width-100 d-flex'>
        {[children]}
    </div>
    </>
    )
}
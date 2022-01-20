import React from 'react';
import './Indicator.css';
import healthy from './icons/healthy.svg';
import love from './icons/love.svg';
import allergy from './icons/allergy.svg';
import thumb from './icons/thumb.svg';
import diet from './icons/diet.svg';


export default function Indicator() {
  return (
    <div className='container-indicator'>
        <div className="container-lines">
            <div className="line upper-line">

            </div>
            <div className="line under-line"></div>
        </div>
        <div className="container-img">
            <div className="bloc-img">
                <img src={healthy} alt="healthy" />
            </div>
            <div className="bloc-img">
                <img src={love} alt="love" />
            </div>
            <div className="bloc-img">
                <img src={allergy} alt="allergy" />
            </div>
            <div className="bloc-img">
                <img src={diet} alt="diet" />
            </div>
            <div className="bloc-img">
                <img src={thumb} alt="thumb" />
            </div>
        </div>
    </div>
  );
}



import React from 'react';
import Vital from './Vital';
import '../styles/Vitals.css';

export default class Vitals extends React.Component {
  
    render() {
        return (
          <div id="Vitals">
            <Vital name='H' color='#F22'></Vital>
            <Vital name='E' color='#FF0'></Vital>
            <Vital name='F' color='#F60'></Vital>
            <Vital name='W' color='#33F'></Vital>
          </div>
        );
    }

}
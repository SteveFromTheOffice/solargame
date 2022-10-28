import React from 'react';
import '../styles/Item.css';

export default class Item extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        
      };

    }
  
    render() {

      this.normalizedRadius  = this.state.radius - this.state.stroke;
      this.circumference     = this.normalizedRadius * 2 * Math.PI;
      this.strokeDashoffset  = this.circumference - this.state.value / this.state.valueMax * this.circumference;

      return (
        <div className='Item'>Item</div>
      );

    }

}
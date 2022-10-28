import React from 'react';
import '../styles/Vital.css';

export default class Vitals extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        radius   : 25,
        stroke   : 5,
        value    : 50,
        valueMax : 100
      };

    }
  
    render() {

      this.normalizedRadius  = this.state.radius - this.state.stroke;
      this.circumference     = this.normalizedRadius * 2 * Math.PI;
      this.strokeDashoffset  = this.circumference - this.state.value / this.state.valueMax * this.circumference;

      return (
        <svg className="Vital">
          <circle
            fill             = "transparent"
            stroke           = { this.props.color }
            strokeDasharray  = { this.circumference + ' ' + this.circumference }
            strokeDashoffset = { this.strokeDashoffset }
            strokeWidth      = {5}
            r                = { this.normalizedRadius }
            cx               = { this.state.radius }
            cy               = { this.state.radius }
          />
        </svg>
      );

    }

    setValue(value) {
      this.setState({value: value});
    }

    componentDidMount() {
      setInterval(() => {
        this.setValue(Math.random()*100);
      }, 2500);
    }
  
    componentWillUnmount() {
    }

}
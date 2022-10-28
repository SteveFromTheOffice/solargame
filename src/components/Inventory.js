import React from 'react';
import Item from './Item';
import '../styles/Inventory.css';

export default class Inventory extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        isDragging: false,
        display: "revert",
        x: 0,
        y: 0
      };
    }
  
    render() {
        return (
          <div className="Inventory" style={{ left: this.state.x, top: this.state.y, display: this.state.display }}>
            <div className='header'>
              <div>Inventory</div>
              <div></div>
              <button className='close'>X</button>
            </div>
            <div class='inner'>
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </div>
        );
    }

    handleClose(event) {

      // Don't start inventory dragging if we didn't click the Inventory.
      if( event.target.id !== "InventoryClose")
        return;
        
      event.stopPropagation();

      this.setState({
        display: "none"
      });

    }

    toggle() {

      if( this.state.display == "none" )
        this.setState({
          display: "revert"
        });
      
      else
        this.setState({
          display: "none"
        });
    }

    handleMouseDown(event) {

      // Don't start inventory dragging if we didn't click the Inventory.
      if( event.target.id !== "Inventory")
        return;
        
      event.stopPropagation();

      this.setState({
        isDragging: true
      });

    }

    handleMouseUp(event) {

      this.setState({
        isDragging: false
      });

    }

    handleMouseMove(event) {

      // Don't move the inventory if we aren't dragging.
      if( !this.state.isDragging )
        return;

      event.stopPropagation();
      
      this.setState({
        x: this.state.x + event.movementX,
        y: this.state.y + event.movementY
      });

    }

    componentDidMount() {

      // Drag.
      window.addEventListener("mousedown", this.handleMouseDown.bind(this));
      window.addEventListener("mouseup", this.handleMouseUp.bind(this));
      window.addEventListener("mousemove", this.handleMouseMove.bind(this));

      // Close Button.
      window.addEventListener("click", this.handleClose.bind(this));
    }
  
    componentWillUnmount() {

      // Drag.
      window.removeEventListener("mousedown", this.handleMouseDown.bind(this));
      window.removeEventListener("mouseup", this.handleMouseUp.bind(this));
      window.removeEventListener("mousemove", this.handleMouseMove.bind(this));

      // Close Button.
      window.removeEventListener("click", this.handleClose.bind(this));
    }

}
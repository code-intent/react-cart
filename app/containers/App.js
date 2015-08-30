import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import Dustbin from '../components/Dustbin';
import Box from '../components/Box';
import { List } from 'immutable';

export class Container extends Component {
  render() {
    return (
      <div>
        <div id='cart-container'>
          <Dustbin />
        </div>
        <div id='products-container'>
          <Box name='Shirt' source='app/images/shirt-green.png'/>
          <Box name='Boots' source='app/images/shirt-green.png'/>
          <Box name='Hat' source='app/images/shirt-green.png'/>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);

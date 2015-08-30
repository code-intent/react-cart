import React, { PropTypes, Component } from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';

const boxTarget = {
  drop() {
    return { name: 'Dustbin' };
  },
};

class Dustbin extends Component {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#5be19e';
    if (isActive) {
      backgroundColor = '#8EFFD1';
    }

    return connectDropTarget(
      <div style={{ backgroundColor }}>
        {isActive ?
          <i className='fa fa-cart-arrow-down'></i> :
          <i className='fa fa-shopping-cart'></i>
        }
      </div>
    );
  }
}

Dustbin.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
};

export default DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(Dustbin);

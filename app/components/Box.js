import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';

const BoxSource = {
  beginDrag() {
    return {};
  },
};

export class Box extends Component {
  componentDidMount() {
    const img = new Image();
    img.onload = () => this.props.connectDragPreview(img);
    img.src = this.props.source;
    img.class = 'whatever';
  }

  render() {
    const { isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.1 : 1;
    const { source } = this.props;
    const backgroundImage = 'url(' + source + ')';
    return connectDragSource(
      <div style={{ opacity }, { backgroundImage }}>
      </div>
    );
  }
}
Box.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default DragSource(ItemTypes.BOX, BoxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))(Box);

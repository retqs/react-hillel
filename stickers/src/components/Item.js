import React, { useState } from 'react';
import { ItemContainer, TextArea, Input, ItemHeader, DeleteBtn, DraggableIcon } from '../UI';
import propTypes from '../propTypes';

const Item = ({ item, onChange, DeleteItem, onDrag }) => {
  const [isDraggable, setIsDraggable] = useState(false);

  const handleInput = (e, sticker) => {
    const target = e.target;
    onChange(target, sticker);
  };

  const Drag = e => {
    setIsDraggable(true);
  };

  const handleDragEnd = e => {
    onDrag(item, e.clientX, e.clientY);
    setIsDraggable(false);
  };

  return (
    <ItemContainer
      draggable='true'
      left={item.left}
      top={item.top}
      onDrag={e => Drag(e)}
      onDragEnd={e => handleDragEnd(e)}
    >
      {isDraggable ? (
        ''
      ) : (
        <DraggableIcon>
          <img src='/pin.png' alt='404' />
        </DraggableIcon>
      )}

      <ItemHeader>
        <Input
          name='title'
          onChange={e => handleInput(e, item)}
          value={item.title}
          placeholder='Input your title...'
          autoComplete='off'
        ></Input>
        <DeleteBtn onClick={() => DeleteItem(item.id)}>&times;</DeleteBtn>
      </ItemHeader>
      <TextArea
        name='text'
        onChange={e => handleInput(e, item)}
        value={item.text}
        placeholder='Input your text...'
      ></TextArea>
    </ItemContainer>
  );
};

export default Item;

Item.propTypes = {
  item: propTypes.objCheck.isRequired,
  onChange: propTypes.fnCheck.isRequired,
  DeleteItem: propTypes.fnCheck.isRequired,
  onDrag: propTypes.fnCheck.isRequired
};

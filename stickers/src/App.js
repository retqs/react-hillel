import React, { useState, useEffect } from 'react';
import { Global, AppContainer, Nav, Button, ItemsContainer, EmptyScreen } from './UI';
import Item from './components/Item';

const initialItem = {
  id: Math.random() * 1000,
  title: '',
  text: '',
  top: 100,
  left: 200
};

function App() {
  const setLocalStorageItem = item => localStorage.setItem('stickers', JSON.stringify(item));
  const getLocalStorageItem = () => JSON.parse(localStorage.getItem('stickers'));

  const [items, setItems] = useState(getLocalStorageItem() || []);

  useEffect(() => {
    setLocalStorageItem(items);
  }, [items]);

  useEffect(() => {
    const values = getLocalStorageItem();
    setItems(
      values.map(value => {
        return { ...value };
      })
    );
  }, []);

  const AddNewItem = () => {
    setItems([...items, { ...initialItem, id: Math.random() * 100 }]);
  };

  const EditItem = (target, sticker) => {
    console.log(sticker);
    setItems(
      items.map(item => {
        if (item.id === sticker.id) {
          return {
            ...item,
            [target.name]: target.value
          };
        }
        return item;
      })
    );
  };

  const DeleteItem = id => {
    const newArr = items.filter(item => item.id !== id);
    setItems(newArr);
  };

  const DeleteAll = () => setItems([]);

  const onDrag = (sticker, ...coords) => {
    const [x, y] = coords;
    setItems(
      items.map(item => {
        if (item.id === sticker.id) {
          return {
            ...item,
            top: y,
            left: x
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <Global></Global>
      <AppContainer>
        <Nav>
          <Button bg='#553772' clr='#f2f2f2' onClick={() => AddNewItem()}>
            Add
          </Button>
          {items.length > 0 ? (
            <Button bg='#553772' clr='#f2f2f2' onClick={() => DeleteAll()}>
              Delete All
            </Button>
          ) : (
            ''
          )}
        </Nav>
        <ItemsContainer onDrop={() => console.log('yikes')}>
          {items.length === 0 ? (
            <EmptyScreen>Your dashboard is empty</EmptyScreen>
          ) : (
            items.map(item => {
              return <Item onDrag={onDrag} key={item.id} item={item} onChange={EditItem} DeleteItem={DeleteItem}></Item>;
            })
          )}
        </ItemsContainer>
      </AppContainer>
    </>
  );
}

export default App;

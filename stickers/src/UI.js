import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        box-sizing:border-box;
    }
`;

export const Nav = styled.nav`
  position: fixed;
  height: 80px;
  width: 100%;
  background: #c7417b;
  color: #f2f2f2;
  z-index: 100000;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
`;

export const AppContainer = styled.main`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background: #f2f2f2;
  overflow: hidden;
`;

export const EmptyScreen = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  font-size: 3rem;
  text-transform: capitalize;
  height: calc(100% - 80px);
  width: 100%;
  color: #333;
  opacity: 0.3;
`;

export const ItemsContainer = styled.section`
  height: 100%;
  width: 100%;
  padding: 80px 0 80px 0;
  display: flex;
  flex-wrap: wrap;
`;

export const ItemContainer = styled.div`
  position: absolute;
  min-height: 400px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #f1f2f3;
  border-radius: 10px;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  transform: translate(-50%, 0px);
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.1);
  cursor: grab;

  &:hover {
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ItemHeader = styled.header`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: auto;
`;

export const Button = styled.button`
  height: 3rem;
  width: 6rem;
  outline: none;
  background: ${props => props.bg};
  color: ${props => props.clr};
  font-size: 1.125rem;
  border: none;
  transition: all 0.4s ease;
  cursor: pointer;
  float: right;
  margin: 15px 30px;
  border-radius: 15px;

  &:hover {
    background: ${props => props.clr};
    color: ${props => props.bg};
  }
`;

export const DeleteBtn = styled.button`
  height: 20px;
  width: 20px;
  background: none;
  outline: none;
  border: none;
  color: #333;
  cursor: pointer;
  position: absolute;
  transition: all 0.4s;
  border-radius: 50%;
  top: -20px;
  right: 5px;
  transform: scale(1.2);
  &:hover {
    color: #f5487f;
    background: #e3e3e3;
  }
`;

export const DraggableIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  height: 30px;
  width: 30px;
  border-radius: 50%;
    z-index: 50;
    cursor:grab;
  img {
    height: 100%;
    width:100%
    object-fit:contain;
    pointer-events:none;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  height: 70%;
  outline: none;
  min-width: 230px;
  max-width: 230px;
  min-height: 300px;
  max-height: 300px;
  margin-top: auto;
  font-size: 1.125rem;
  resize: none;
  border-radius: 0 0 20px 20px;
`;

export const Input = styled.input`
  outline: none;
  position: relative;
  background: none;
  height: auto;
  width: 70%;
  border: none;
  border-bottom: 1px solid #999;
  margin: 0 auto;
  font-size: 1.125rem;
  line-height: 1.5rem;
`;

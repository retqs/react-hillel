import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function() {
  const history = useHistory();
  return <BackBtn onClick={() => history.goBack()}>Back</BackBtn>;
}

const BackBtn = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: grid;
  place-items: center;
  z-index: 10;
  background: #e7476a;
  color: #fff;
  height: 20px;
  width: 40px;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px;
`;

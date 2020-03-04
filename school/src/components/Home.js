import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HomeWrapper>
      <Header>
        <h2>choose your group or see the list of all students</h2>
      </Header>
      <Container>
        <Block>
          <Link
            to='/students'
            style={{ textDecoration: 'none', color: '#121212', textTransform: 'capitalize', fontSize: '1.5rem' }}
          >
            <h2>Manage Students</h2>
          </Link>
        </Block>
        <Block>
          <Link
            to='/groups'
            style={{ textDecoration: 'none', color: '#121212', textTransform: 'capitalize', fontSize: '1.5rem' }}
          >
            <h2>Manage Groups</h2>
          </Link>
        </Block>
      </Container>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.main`
  height: 100vh;
  width: 100%;
`;

const Header = styled.header`
  height: 10vh;
  width: 100%;
  display: grid;
  place-items: center;
  position: relative;

  text-transform: capitalize;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #121212;
    opacity: 0.1;
  }
`;

const Container = styled.div`
  display:flex;
  height: 90vh;
  width: 100%:
`;

const Block = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: grid;
  place-items: center;
`;

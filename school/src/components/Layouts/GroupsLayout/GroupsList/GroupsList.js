import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';

const GroupsList = ({ groups, addGroup, deleteGroup }) => {
  const match = useRouteMatch();

  return (
    <Container>
      <AddGroup onClick={() => addGroup()}>Add new Group</AddGroup>
      <List>
        {groups.map(group => (
          <Card key={group.id}>
            <DeleteBtn className='dltGroup' onClick={() => deleteGroup(group)}>
              &times;
            </DeleteBtn>
            <CardTitle>{group.name}</CardTitle>
            <CardFooter>
              <h2 style={{ display: 'grid', placeItems: 'center' }}>Members: {group.students.length}</h2>
              <Link
                style={{
                  textDecoration: 'none',
                  display: 'grid',
                  placeItems: 'center',
                  color: '#e7476a'
                }}
                to={`${match.url}/${group.id}`}
              >
                View Group
              </Link>
            </CardFooter>
          </Card>
        ))}
      </List>
    </Container>
  );
};

export default GroupsList;

const DeleteBtn = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: grid;
  place-items: center;
  z-index: 10;
  background: #e7476a;
  color: #fff;
  height: 20px;
  width: 40px;
  border-radius: 10px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 1127px;
  height: 100%;
  margin: 0 auto;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
`;

const Card = styled.li`
  height: 300px;
  width: 300px;
  margin-right: 50px;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
  margin-top: 50px;
`;

const CardTitle = styled.div`
  flex: 2;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
`;

const CardFooter = styled.div`
  position: relative;
  padding: 5px 10px;
  flex: 1;

  display: flex;
  justify-content: space-between;
  aling-items: center;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #888;
    opacity: 0.3;
  }
`;

const AddGroup = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: grid;
  place-items: center;
  z-index: 10;
  background: green;
  color: #fff;
  height: 20px;
  width: 150px;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px;
`;

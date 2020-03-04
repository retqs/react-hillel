import React from 'react';
import Student from '../Student/ReduxWrapper';
import styled from 'styled-components';
import BackBtn from '../../Buttons/BackBtn';
import { Link, useRouteMatch } from 'react-router-dom';

const StudentsList = ({ students, searchStudent, search }) => {
  const match = useRouteMatch();
  console.log(students);
  return (
    <div className='searchConainer'>
      <BackBtn></BackBtn>
      <Link
        to={`${match.url}/newStudent`}
        style={{
          position: 'absolute',
          right: '2rem',
          top: '2rem',
          background: 'green',
          zIndex: 5,
          textDecoration: 'none',
          padding: '5px 10px',
          borderRadius: '5px',
          color: '#f2f2f2'
        }}
      >
        Add student
      </Link>
      <Header className='input'>
        <SearchBar
          type='text'
          value={search}
          onChange={e => searchStudent(e.target.value)}
          placeholder='Seach for the student...'
        />
      </Header>
      <ul>
        {students.map(student => {
          return <Student key={student.id} student={student}></Student>;
        })}
      </ul>
    </div>
  );
};

export default StudentsList;

const Header = styled.header`
  height: 100px;
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const SearchBar = styled.input`
  outline: none;
  border-radius: 20px;
  height: 2rem;
  width: 300px;
  font-size: 1.2rem;
  padding: 5px 10px;
  border: 1px solid #999;
`;

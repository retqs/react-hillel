import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { editGroup } from '../../../../store/actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, { id }) => {
  return {
    item: state.groups.groupsData.find(item => item.id === +id)
  };
};

const mapDispatchToProps = {
  editGroup
};

const Group = ({ item, editGroup }) => {
  const handleInput = e => {
    const target = e.target;
    editGroup({ ...item, name: target.value });
  };

  return (
    <Wrapper>
      <Header>
        <Field fs={2} type='text' value={item.name} onChange={e => handleInput(e)} />
      </Header>
      <StudentList>
        {item.students.length === 0 ? (
          <Link
            to='/students/newStudent'
            style={{ textDecoration: 'none', fontSize: '2rem', color: '#121212', width: '200px', margin: '0 auto' }}
          >
            Add student
          </Link>
        ) : (
          item.students.map(student => {
            return <Student key={student.id}>{student.name}</Student>;
          })
        )}
      </StudentList>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: grid;
  place-items: center;
  height: 100px;
  font-size: 2rem;
`;

const StudentList = styled.ul`
  list-style: none;
  width: 700px;
  margin: 0 auto;
  position: relative;
`;

const Student = styled.li`
  margin: 20px 0;
  font-size: 1.4rem;
`;

const Field = styled.input`
  background: none;
  outline: none;
  border: none;
  height: 2rem;
  font-size: ${({ fs }) => fs}rem;
  border-bottom: 1px solid #9999;
  width: 190px;
  text-align: center;

  &:focuse {
    border-color: #121212;
  }
`;

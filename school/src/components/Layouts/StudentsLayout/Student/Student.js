import React from 'react';
import styled from 'styled-components';

const Student = ({ student, deleteStudent, editStudent }) => {
  const handleInput = e => {
    const target = e.target;
    editStudent({ ...student, name: target.value });
  };

  return (
    <StudentContainer>
      <StudentName value={student.name} onChange={handleInput}></StudentName>
      <div>
        <DeleteBtn onClick={() => deleteStudent(student)}>&times;</DeleteBtn>
      </div>
    </StudentContainer>
  );
};

export default Student;

const StudentContainer = styled.div`
  display: flex;
  aling-items: center;
  justify-content: center;
  padding-top: 50px;
`;

const StudentName = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #121212;
  height: 2rem;
  font-size: 1.5rem;
  outline: none;
`;

const DeleteBtn = styled.button`
  background: #e7476a;
  border: none;
  color: #f2f2f2;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
`;

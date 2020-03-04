import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const AddStudent = ({ groups, addStudent }) => {
  const history = useHistory();

  const [inputVal, setInputVal] = useState({
    group: '',
    name: ''
  });

  const handleChange = e => {
    const target = e.target;
    setInputVal({
      ...inputVal,
      [target.name]: target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.goBack();

    addStudent({ id: Date.now(), ...inputVal });
  };

  return (
    <FormWrapper>
      <MyForm onSubmit={handleSubmit}>
        <label>
          Add Name:
          <MyInput type='text' name='name' onChange={handleChange} />
        </label>
        <MySelection onChange={handleChange} name='group'>
          <option value=''>Select a group</option>
          {groups.map(value => {
            return (
              <option value={value.name} key={value.id}>
                {value.name}
              </option>
            );
          })}
        </MySelection>
        <SubmitBtn type='submit'>Add</SubmitBtn>
      </MyForm>
    </FormWrapper>
  );
};

export default AddStudent;

const FormWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;

  & > * + * {
    margin-top: 20px;
  }
`;

const SubmitBtn = styled.button`
  background: none;
  outline: none;
  height: 40px;
  width: 100%;
  font-size: 1.5rem;
  background: #75f;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const MySelection = styled.select`
  font-size: 1.4rem;
  outline: none;
  background: ;
`;

const MyInput = styled.input`
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #121212;
  font-size: 1.4rem;
  width: 200px;
  margin-left: 10px;
`;

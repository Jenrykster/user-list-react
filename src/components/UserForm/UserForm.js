import styles from './UserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from 'react';

const UserForm = (props) => {
  let [usrName, setUsrName] = useState('');
  let [age, setAge] = useState('');

  const usrNameEditHandler = (event) => {
    setUsrName(event.target.value);
  };

  const ageEditHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddUser({
      age,
      userName: usrName,
      id: Math.random().toString(),
    });
    setUsrName('');
    setAge('');
  };
  return (
    <Card>
      <form onSubmit={submitHandler} className={styles['user-form']}>
        <div>
          <label htmlFor={'username'}>Username</label>
          <input
            required={true}
            value={usrName}
            onChange={usrNameEditHandler}
            name={'username'}
            type={'text'}
          ></input>
        </div>
        <div>
          <label htmlFor={'age'}>Age (Years)</label>
          <input
            required={true}
            value={age}
            onChange={ageEditHandler}
            name={'age'}
            type={'number'}
          ></input>
        </div>
        <Button type={'submit'}>Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;

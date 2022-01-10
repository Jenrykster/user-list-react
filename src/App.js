import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';

function App() {
  let [users, setUsers] = useState([
    {
      age: '18',
      userName: 'Joao',
      id: '01',
    },
  ]);
  const deleteHandler = (id) => {
    setUsers((prevState) => {
      return prevState.filter((user) => {
        return user.id !== id;
      });
    });
  };
  const createNewUser = (userData) => {
    setUsers((prevState) => {
      return [...prevState, userData];
    });
  };

  return (
    <div>
      <UserForm onAddUser={createNewUser} />
      <UserList users={users} onDelete={deleteHandler} />
    </div>
  );
}

export default App;

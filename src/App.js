import React, { useState } from 'react';
import Modal from './components/UI/Modal';
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
  let [showModal, setShowModal] = useState(false);
  let [modalError, setModalError] = useState('There was an error');
  const deleteHandler = (id) => {
    setUsers((prevState) => {
      return prevState.filter((user) => {
        return user.id !== id;
      });
    });
  };
  const createNewUser = (userData) => {
    if (userData.userName.trim().length === 0 || userData.age.length === 0) {
      setModalError('Please insert valid data');
      setShowModal(true);
    } else if (parseInt(userData.age) < 0) {
      setModalError("Age can't be a negative number");
      setShowModal(true);
    } else {
      setUsers((prevState) => {
        return [...prevState, userData];
      });
    }
  };
  const dismissModal = (event) => {
    setShowModal(false);
  };

  return (
    <div>
      <UserForm onAddUser={createNewUser} />
      <UserList users={users} onDelete={deleteHandler} />
      {showModal && (
        <Modal title={'Invalid input'} onModalDismissal={dismissModal}>
          {modalError}
        </Modal>
      )}
    </div>
  );
}

export default App;

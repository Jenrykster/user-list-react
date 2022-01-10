import styles from './UserList.module.css';
import Card from '../UI/Card';
import UserCard from '../UserCard/UserCard';

const UserList = (props) => {
  const userCardClickHandler = (id) => {
    props.onDelete(id);
  };
  const generateUserList = (users) => {
    let userElements = users.map((user) => {
      return (
        <UserCard
          onUserClick={userCardClickHandler}
          id={user.id}
          key={user.id}
          name={user.userName}
          age={user.age}
        />
      );
    });
    return userElements;
  };
  return (
    <Card className={styles['user-list']}>
      {props.users.length > 0 ? (
        generateUserList(props.users)
      ) : (
        <h2>There are no users!</h2>
      )}
    </Card>
  );
};

export default UserList;

import styles from './UserList.module.css';
import Card from '../UI/Card';
import UserCard from '../UserCard/UserCard';

const UserList = (props) => {
  return (
    <Card className={styles['user-list']}>
      <UserCard name={'João'} years={'18'} />
      <UserCard name={'Bebê'} years={'1'} />
    </Card>
  );
};

export default UserList;

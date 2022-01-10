import styles from './UserCard.module.css';
import Card from '../UI/Card';

const UserCard = (props) => {
  const userClickHandler = (event) => {
    props.onUserClick(props.id);
  };
  return (
    <Card onClick={userClickHandler} className={styles.user}>
      {`${props.name} (${props.age} ${props.age > 1 ? 'years' : 'year'} old)`}
    </Card>
  );
};

export default UserCard;

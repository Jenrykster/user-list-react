import styles from './UserCard.module.css';
import Card from '../UI/Card';

const UserCard = (props) => {
  return (
    <Card className={styles.user}>
      {`${props.name} (${props.years} ${
        props.years > 1 ? 'years' : 'year'
      } old)`}
    </Card>
  );
};

export default UserCard;

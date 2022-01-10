import styles from './UserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const UserForm = (props) => {
  return (
    <Card>
      <form className={styles['user-form']}>
        <div>
          <label htmlFor={'username'}>Username</label>
          <input name={'username'} type={'text'}></input>
        </div>
        <div>
          <label htmlFor={'age'}>Age (Years)</label>
          <input name={'age'} type={'number'}></input>
        </div>
        <Button type={'submit'}>Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;

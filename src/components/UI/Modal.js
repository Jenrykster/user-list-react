import styles from './Modal.module.css';
import Card from './Card';
import Button from './Button';

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles['modal-container']}>
        <Card>
          <div className={styles['modal-header']}>{props.title}</div>
          <div className={styles['modal-content']}>{props.children}</div>
          <Button onClick={props.onModalDismissal}>Okay</Button>
        </Card>
      </div>
    </div>
  );
};

export default Modal;

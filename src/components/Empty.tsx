import styles from './Empty.module.css';
import Clipboard from '../assets/Clipboard.svg';

export function Empty() {
    return (
      <div className={styles.empty_tasks}>
        <img src={Clipboard} alt="" />

        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    )
}
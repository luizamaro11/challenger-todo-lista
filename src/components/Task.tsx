import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { IconCheckTask } from './IconCheckTask';

interface Task {
  id: number,
  check: boolean,
  text: string,
  onChangeCheck: (id: number) => void,
  onDeleteTask: (id: number) => void
}

export function Task({ id, check, text, onChangeCheck, onDeleteTask }: Task) {
  function handleCheckTask() {
    onChangeCheck(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div>
      <div className={styles.list_tasks}>
        <button onClick={handleCheckTask} className={check === true ? styles.buttonChecked : ''}>
          <IconCheckTask check={check} />
        </button>
        <p className={check === true ? styles.checked : ''}>{ text }</p>
        <button onClick={handleDeleteTask}>
          <Trash size={24} />
        </button>
      </div>
    </div>
  )
}
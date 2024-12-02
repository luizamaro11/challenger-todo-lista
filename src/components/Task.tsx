import Clipboard from '../assets/Clipboard.svg';
import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { useState, MouseEvent } from 'react';
import { IconCheckTask } from './IconCheckTask';

interface Task {
  check: boolean,
  text: string
}

export function Task({ check, text }: Task) {
  const [checkTask, setCheckTask] = useState(check);

  function handleCheckTask() {
    console.log('Click!');
    setCheckTask(checkTask === false ? true : false);
  }

  return (
    <div>
      <div className={styles.empty_tasks}>
        <img src={Clipboard} alt="" />

        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>

      <div className={styles.list_tasks}>
        <button onClick={handleCheckTask}>
          <IconCheckTask check={checkTask} />
        </button>
        <p>{ text }</p>
        <button>
          <Trash size={24} />
        </button>
      </div>
    </div>
  )
}
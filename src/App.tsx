import './global.css';
import styles from './App.module.css'
import Logo from './assets/Logo.svg';
import Clipboard from './assets/Clipboard.svg';
import { PlusCircle, Circle, Trash } from 'phosphor-react';

export function App() {
  return (
    <div>
      <header className={styles.header}>
        <img src={Logo} alt="Logo da ToDo list" />
      </header>

      <main>
        <form className={styles.addTask} action="">
          <input type="text" placeholder="Adicionar uma nova tarefa" />

          <button type="submit"> 
            <span>Criar</span>
            <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.tasks}>
          <div className={styles.tasks_header}>
            <div>
              <p>Tarefas criadas</p>
              <span>5</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>2 de 5</span>
            </div>
          </div>

          <div className={styles.empty_tasks}>
            <img src={Clipboard} alt="" />

            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>

          <div className={styles.list_tasks}>
            <Circle size={24} />
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <Trash size={24} />
          </div>

          <div className={styles.list_tasks}>
            <Circle size={24} />
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <Trash size={24} />
          </div>

          <div className={styles.list_tasks}>
            <Circle size={24} />
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <Trash size={24} />
          </div>
        </div>
      </main>
    </div>
  )
}
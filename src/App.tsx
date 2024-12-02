import './global.css';
import styles from './App.module.css'
import Logo from './assets/Logo.svg';
import { PlusCircle } from 'phosphor-react';
import { Task } from './components/Task';
import { ChangeEvent, FormEvent, useState } from 'react';

export function App() {
  const [tasks, setTasks] = useState([
    {
      key: 1,
      check: false,
      text: 'Dessenvolver meu portfólio',
    }
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  const taskCompleted = tasks.filter(task => {
    return  task.check === true;
  });

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {
      key: tasks.length+1,
      check: false,
      text: newTaskText
    }]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  return (
    <div>
      <header className={styles.header}>
        <img src={Logo} alt="Logo da ToDo list" />
      </header>

      <main>
        <form onSubmit={handleCreateNewTask} className={styles.addTask}>
          <input 
            type="text"
            placeholder="Adicionar uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskChange}
          />

          <button type="submit">
            <span>Criar</span>
            <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.tasks}>
          <div className={styles.tasks_header}>
            <div>
              <p>Tarefas criadas</p>
              <span>{tasks.length}</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>{taskCompleted.length} de {tasks.length}</span>
            </div>
          </div>

          {tasks.map(task => {
            return <Task key={task.key} check={task.check} text={task.text} />
          })}

        </div>
      </main>
    </div>
  )
}
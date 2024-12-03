import './global.css';
import styles from './App.module.css'
import Logo from './assets/Logo.svg';
import { PlusCircle } from 'phosphor-react';
import { Task } from './components/Task';
import { ChangeEvent, FormEvent, useState } from 'react';

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
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
      id: tasks.length+1,
      check: false,
      text: newTaskText
    }]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function changeCheck(id: number) {
    return setTasks((prevTasks) => 
      prevTasks.map((task) => 
        task.id === id 
          ? { ...task, check: !task.check }
          : task
      )
    );
  }

  function deleteTask(id: number) {
    const taskWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id;
    });

    setTasks(taskWithoutDeletedOne);
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
            return (
              <Task 
                key={task.id}
                id={task.id}
                check={task.check} 
                text={task.text}
                onChangeCheck={changeCheck}
                onDeleteTask={deleteTask}
              /> 
            )
          })}

        </div>
      </main>
    </div>
  )
}
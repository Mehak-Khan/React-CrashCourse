import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react'; //want state on top level

function App() { //is JSX
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'reminder1',
        day: 'monday',
        reminder: true

},

{
    id: 2,
    text: 'reminder2',
    day: 'tuesday',
    reminder: true

},

{
    id: 3,
    text: 'reminder3',
    day: 'wednesday',
    reminder: false

},
])


//add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])

}

//deleteTask
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}

//toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder: !task.reminder } : task))
}

  //can put JS right in here
 // const x = false;

  return ( //can only return single element therefore everything insdie div
    <div className="Container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAddTask = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? 
      (
      <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> 
      ) : (
        'No Tasks'
      ) }
    </div>
  );
}

export default App;

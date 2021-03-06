import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

//data
import tasks from './data/task.json';

//components
import Tasks from './components/tasks';
import TaskForm from './components/taskForm';
import Posts from './components/Posts';


// console.log(tasks);

class App extends Component {
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    // console.log('Add a new task...');
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
      done: false
    }

    // console.log(newTask);
    this.setState({
      //agrega un nuevo elemento al arreglo tasks
      tasks: [...this.state.tasks, newTask]
    });
  }

  delTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks
    });
  }

  checkDone = id => {
    // console.log('aqui ' + id);
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });

    this.setState({
      tasks: newTasks
    });
  }



  
  render() {
    // return <h1>Hola Mundo</h1>
    return <div>
      {/* {this.state.tasks.map(e => <h1 key={e.id}>{e.title}</h1>)} */}
      
      {/* <TaskForm addTask={this.addTask} />

      <Tasks
        tasks={this.state.tasks}
        delTask={this.delTask}
        chkDone={this.checkDone}
      />

      <Posts /> */}

      <Router>
        <Link to="/">Home</Link><br />
        <Link to="/posts">Posts</Link>

        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.addTask} />

            <Tasks
              tasks={this.state.tasks}
              delTask={this.delTask}
              chkDone={this.checkDone}
            />
          </div>
        }} />

        <Route path="/posts" component={Posts} />
      </Router>

    </div>
  }
}


export default App;

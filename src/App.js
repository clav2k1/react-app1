import React, {Component} from 'react';
import './App.css';
import tasks from './data/task.json';
import Tasks from './components/tasks';
// console.log(tasks);

class App extends Component {
  state = {
    tasks: tasks
  }
  
  render() {
    // return <h1>Hola Mundo</h1>
    return <div>
      {/* {this.state.tasks.map(e => <h1 key={e.id}>{e.title}</h1>)} */}
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}


export default App;

import React, {Component} from 'react';


class Task extends Component {
    render() {
        // return <div>
        //     {this.props.task.title} - 
        //     {this.props.task.description} - 
        //     {this.props.task.done} - 
        //     {this.props.task.id}
        //     <input type="checkbox" />
        //     <button>x</button>
        // </div>

        const {task} = this.props;

        return <div>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" />
            <button>x</button>
        </div>
    }
}

export default Task;
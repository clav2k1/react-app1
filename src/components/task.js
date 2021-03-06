import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './task.css';



class Task extends Component {
    styleTaskCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'red',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    
    render() {
        // return <div  className="red">
        //     {this.props.task.title} - 
        //     {this.props.task.description} - 
        //     {this.props.task.done} - 
        //     {this.props.task.id}
        //     <input type="checkbox" />
        //     <button>x</button>
        // </div>

        const {task} = this.props;
        
        
        return <div style={this.styleTaskCompleted()}>
            {task.title} -
            {task.description} -
            {task.done} -
            {task.id}
            <input type="checkbox" onChange={this.props.chkDone.bind(this, task.id)} />
            <button style={styleBtnDelete} onClick={this.props.delTask.bind(this, task.id)}>x</button>
        </div>
    }
}


Task.propTypes = {
    task: PropTypes.object.isRequired
};

const styleBtnDelete = {
    fontSize: '18px',
    color: '#fff',
    background: 'red',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
};

export default Task;
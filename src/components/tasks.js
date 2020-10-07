import React, {Component} from 'react';
import Task from './task';
import PropTypes from 'prop-types';


class Tasks extends Component {
    render() {
        return this.props.tasks.map(task =>
        <Task
            task={task}
            key={task.id}
            delTask={this.props.delTask}
            chkDone={this.props.chkDone}
        />);
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default Tasks;
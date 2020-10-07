import React, {Component} from 'react';



export default class TaskForm extends Component {
    state = {
        title: '',
        description: ''
    }
    
    onSubmit = e => {
        // console.log('submiting...');
        console.log(this.state);
        e.preventDefault();
    }

    onChange = e => {
        // console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
        
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="title"
                    type="text"
                    placeholder="write a Task"
                    onChange={this.onChange}
                    value={this.state.title}>
                </input>

                <br/><br/>

                <textarea
                    name="description"
                    placeholder="write a Description"
                    onChange={this.onChange}
                    value={this.state.description}>
                </textarea>
                
                <br/>

                <input type="submit" />
            </form>
        );
    }
}
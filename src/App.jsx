import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2018'
        }
    }

    changeDeadlineTo() {
        this.setState({ 
            deadline: this.state.newDeadline 
        });
    }

    render() {
        return(
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline}
                </div>

                <Clock 
                 deadline = {this.state.deadline} />

                <div>
                    <input 
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})} />
                    <button 
                        onClick={() => this.changeDeadlineTo('November 25, 2018')}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
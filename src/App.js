import './App.css';
import React, { Component } from 'react'
import logo from './logo.svg';

class App extends Component {
    constructor(props) {
        super()

        this.title = props.title
        this.message = props.message
    }
    render() {
        return <div>
            <h1 className="bg-primary text-white display-4">React</h1>

            <div className="container">
                <p className="subtitle">{this.title}</p>
                <p>{this.message}</p>
            </div>

            <div className="App">
                <h1 className="bg-success text-white  display-4">Hello React!!</h1>
                <header className="App-header">

                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code>and save to reload.
                    </p>
                    <a className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </div>
    }
}

export default App;

import React, { Component } from "react";

export default class AppClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: false
        }
        this.changeState = this.changeState.bind(this)
    }

    changeState() {
        this.setState({
            current: !this.state.current
        })
    }
    componentDidMount() {
        console.log('Я родился || ComponentDidMount');
    }
    componentDidUpdate() {
        console.log('Я изменился || ComponentDidUpdate');
    }
    componentWillUnmount() {
        console.log('WillUnmount');
    }

    render() {
        return (
            <div>
                <h1>AppClass</h1>
                <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }
}
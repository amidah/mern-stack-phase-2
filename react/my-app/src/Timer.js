import React, { Component } from 'react';

class Timer extends Component {

    constructor(props){
        super(props);
        this.state = {
            seconds: 0
        };
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
        this.setState(prevState => ({
        seconds: prevState.seconds + 1
        }));
        }, 1000);
        }
       

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render(){
        return(
            <div>
                <h1>Timer:{this.state.seconds} seconds</h1>
                <button onClick={() => this.setState({seconds: 0})}>Reset</button>
            </div>
        );
    }

}

export default Timer;


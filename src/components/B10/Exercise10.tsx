import React, { Component } from 'react';

interface CounterState {
    count: number;
}

export default class Exercise10 extends Component<{}, CounterState> {
    timerID: number | undefined;

    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0
        };
        this.timerID = undefined;
    }

    componentDidMount() {
        this.timerID = window.setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        if (this.timerID !== undefined) {
            clearInterval(this.timerID);
        }
    }

    tick() {
        this.setState((prevState) => ({
            count: (prevState.count + 1) % 11
        }));
    }

    render() {
        return (
            <div>
                BT10 <br />
                <p>{this.state.count}</p>
            </div>
        );
    }
}

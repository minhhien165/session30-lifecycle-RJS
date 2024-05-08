import React, { Component } from 'react';

interface ClockState {
    time: Date;
}

export default class Exercise9 extends Component<{}, ClockState> {
    timerID: number | undefined;

    constructor(props: {}) {
        super(props);
        this.state = {
            time: new Date()
        };
        this.timerID = undefined;
    }

    componentDidMount() {
        this.timerID = window.setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        if (this.timerID !== undefined) {
            clearInterval(this.timerID);
        }
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <div>
                <p>Thời gian hiện tại: {this.state.time.toLocaleTimeString()}.</p>
            </div>
        );
    }
}

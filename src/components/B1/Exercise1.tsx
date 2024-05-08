import { Component } from 'react'
interface User {
    name: string,
}

export default class Exercise1 extends Component<{}, User> {
    constructor(prop: User) {
        super(prop)
        this.state = {
            name: "Hiển"
        }
    }
    componentWillMount(): void {
        this.setState({
            name: "Minh Hiển"
        })
    }
    render() {
        return (
            <div>
                BT1 <br />
                Họ và tên: {this.state.name}
                </div>
        )
    }
}

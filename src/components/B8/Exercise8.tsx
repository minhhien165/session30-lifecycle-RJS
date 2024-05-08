import React, { Component } from 'react';

interface ChangeTitleProps {

}

interface ChangeTitleState {
    inputValue: string;
}

export default class Exercise8 extends Component<ChangeTitleProps, ChangeTitleState> {
    constructor(props: ChangeTitleProps) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        this.setState({ inputValue: value });
        document.title = value;
    }

    render() {
        return (
            <div>
                BT8 <br />
                <input 
                    type="text" 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange} 
                    placeholder="Enter new title..." 
                />
            </div>
        );
    }
}

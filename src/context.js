import React, {Component} from 'react'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts : [
            {
                id: 1,
                nom: 'John Doe',
                email: 'john@gmail.com',
                tel: '555-555-555'
            },
            {
                id: 2,
                nom: 'John Doe',
                email: 'john@gmail.com',
                tel: '555-555-555'
            },
            {
                id: 3,
                nom: 'John Doe',
                email: 'john@gmail.com',
                tel: '555-555-555'
            }
        ]
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
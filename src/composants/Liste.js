import React, { Component, Fragment } from 'react'
import Contact from './Contact'

export default class Liste extends Component {

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

    supprime = (id) => {
        const nvContacts = this.state.contacts.filter(contact => 
            contact.id !== id)

            this.setState({
                contacts: nvContacts
            })
    
    }

    render() {
        return (
            <Fragment>
                {this.state.contacts.map(contact => (
                    <Contact 
                    key={contact.id}
                    nom={contact.nom}
                    email={contact.email}
                    tel={contact.tel}
                    supprimeClick={() => this.supprime(contact.id)}/>
                ))}
            </Fragment>
        )
    }
}

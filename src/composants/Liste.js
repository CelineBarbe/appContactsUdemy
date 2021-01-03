import React, { Component, Fragment } from 'react'
import Contact from './Contact'
import {Consumer} from '../context'

export default class Liste extends Component {

    supprime = (id) => {
        const nvContacts = this.state.contacts.filter(contact => 
            contact.id !== id)

            this.setState({
                contacts: nvContacts
            })
    
    }

    render() {

        return(
            <Consumer>
                {value => {
                    return (
                        <Fragment>
                        {value.contacts.map(contact => (
                        <Contact 
                            key={contact.id}
                            nom={contact.nom}
                            email={contact.email}
                            tel={contact.tel}
                            supprimeClick={() => this.supprime(contact.id)}
                        />
                            ))}
                        </Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

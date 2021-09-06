import React, { useState, useEffect } from 'react';
import { TileList } from '../components/tileList';
import { ContactForm } from '../components/contactForm';


export function ContactsPage(props) {
    const contacts = props.contacts;
    const addContact = props.addContact;
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [duplicate, setDuplicate] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!duplicate) {
            addContact(name, phone, email);
            setName('');
            setPhone('');
            setEmail('');
        }
    };

    useEffect(() => {
        for (let contact of contacts) {
            if (name === contact.name) {
                setDuplicate(true);
            }
            return;
        }
    });

    return (
        <>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    name={name}
                    phone={phone}
                    email={email}
                    setName={setName}
                    setPhone={setPhone}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit} />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList data={contacts} />
            </section>
        </>
    );
};

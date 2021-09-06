import React from 'react';

export function ContactPicker(props) {
    const contacts = props.contacts;
    const onChange = props.onChange;

    return (
        <select onChange={onChange}>
            <option value="" selected hidden>Choose something</option>
            {contacts.map((contact, index) => <option value={contact.name} key={index}>{contact.name}</option>
            )}
        </select>
    );
}
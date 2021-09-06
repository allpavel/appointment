import React from 'react';

export function ContactForm({name, setName, phone, setPhone, email, setEmail, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={({target}) => setName(target.value)} placeholder="Enter your name..." required />
            <input type="tel" value={phone} onChange={({target}) => setPhone(target.value)} placeholder="Enter your phone number..." required />
            <input type="email" value={email} onChange={({target}) => setEmail(target.value)} placeholder="Enter your email..." required />
            <input type="submit"></input>
        </form>
    );
}
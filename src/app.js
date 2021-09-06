import React, { useState } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { ContactsPage } from './containers/contactsPage';
import { AppointmentsPage } from './containers/appointmentsPage';

export function App() {
    const [contacts, setContacts] = useState([]);
    const [appointments, setAppointments] = useState([]);

    const ROUTES = {
        CONTACTS: "/contacts",
        APPOINTMENTS: "/appointments"
    };

    const addContact = (name, phone, email) => {
        setContacts((prev) => [{name, phone, email}, ...prev]);
    };

    const addAppointment = (title, contact, date, time) => {
        setAppointments((prev) => [{title, contact, date, time}, ...prev]);
    };

    return (
        <>
            <nav>
                <NavLink to={ROUTES.CONTACTS} activeClassName="active">Contacts</NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">Appointments</NavLink>
            </nav>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={ROUTES.CONTACTS} />
                    </Route>
                    <Route path={ROUTES.CONTACTS}>
                        <ContactsPage addContact={addContact} contacts={contacts} />
                    </Route>
                    <Route path={ROUTES.APPOINTMENTS}>
                        <AppointmentsPage addAppointment={addAppointment} appointments={appointments} contacts={contacts}/>
                    </Route>
                </Switch>
            </main>
        </>
    );
}
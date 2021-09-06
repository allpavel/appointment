import React, { useState } from 'react';
import { AppointmentForm } from '../components/appointmentForm';
import { TileList } from '../components/tileList';

export function AppointmentsPage(props) {
    const appointments = props.appointments;
    const contacts = props.contacts;
    const addAppointment = props.addAppointment;

    const [title, setTitle] = useState("");
    const [contact, setContact] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addAppointment(title, contact, date, time);
        setTitle('');
        setContact('');
        setDate('');
        setTime('');
    };

    return (
        <>
            <section>
                <h2>Add appointment</h2>
                <AppointmentForm 
                    title={title}
                    setTitle={setTitle}
                    contact={contact}
                    setContact={setContact}
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    handleSubmit={handleSubmit}
                    contacts={contacts} />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList data={appointments} />
            </section>
        </>
    );
}
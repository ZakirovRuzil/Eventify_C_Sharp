"use client"

import Button from "antd/es/button/button";
import {Events} from "@/app/components/Events";
import {useEffect, useState} from "react";
import {createEvent, deleteEvent, EventRequest, getAllEvents, updateEvent} from "@/app/services/events";
import Title from "antd/es/typography/Title";
import {CreateUpdateEvent, Mode} from "@/app/components/CreateUpdateEvent";

export default function EventsPage() {
    const defaultValues = {
        name: "",
        short_description: "",
        long_description: "",
        place: "",
        date: "",
        image: "",
        user_id: "",
    } as Event;

    const [values, setValues] = useState<Event>(defaultValues)

    const [events, setEvents] = useState<Event[]>([])
    const [loading, setLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState(Mode.Create);

    const handleCreateEvent = async (request: EventRequest) => {
        await createEvent(request);
        closeModal();

        const events = await getAllEvents();
        setEvents(events);
    };

    const handleUpdateEvent = async (id: string, request: EventRequest) => {
        await updateEvent(id, request);
        closeModal();

        const events = await getAllEvents();
        setEvents(events);
    };

    const handleDeleteEvent = async (id: string) => {
        await deleteEvent(id);
        closeModal();

        const events = await getAllEvents();
        setEvents(events);
    };

    const openModal = () => {
        setMode(Mode.Create);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setValues(defaultValues);
        setIsModalOpen(false);
    };

    const openEditModal = (event: Event) => {
        setMode(Mode.Edit);
        setValues(event);
        setIsModalOpen(true);
    };

    useEffect(() => {
        const getEvents = async () => {
            const events = await getAllEvents();
            setLoading(false);
            setEvents(events);
        }

        getEvents();
    }, [])

    return (
        <div>
            <Button onClick={openModal}>Создать мероприятие</Button>

            <CreateUpdateEvent
                mode={mode}
                values={values}
                isModelOpen={isModalOpen}
                handleCancel={closeModal}
                handleCreate={handleCreateEvent}
                handleUpdate={handleUpdateEvent}
            />

            {loading ? (
                <Title>Loading...</Title>
            ) : (
                <Events
                    events={events}
                    handleOpen={openEditModal}
                    handleDelete={handleDeleteEvent}
                />
            )}
        </div>
    );
}

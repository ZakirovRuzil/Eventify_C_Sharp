export interface EventRequest {
    name: string;
    shortDescription: string;
    longDescription: string;
    place: string;
    date: string;
    imageUrl: string;
}

export const getAllEvents = async () => {
    const response = await fetch("https://localhost:7014/api/Event")

    return response.json();
}

export const createEvent = async (eventRequest : EventRequest) => {
    await fetch("https://localhost:7014/api/Event", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(eventRequest),
    });
}

export const updateEvent = async (id: string, eventRequest : EventRequest) => {
    await fetch(`https://localhost:7014/api/Event/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(eventRequest),
    });
}

export const deleteEvent = async (id: string) => {
    await fetch(`https://localhost:7014/api/Event/${id}`, {
        method: "DELETE",
    });
}
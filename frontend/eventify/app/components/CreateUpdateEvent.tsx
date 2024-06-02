import {EventRequest} from "@/app/services/events";
import Modal from "antd/es/modal/Modal";
import Input from "antd/es/input/Input";
import {useEffect, useState} from "react";
import TextArea from "antd/es/input/TextArea";

interface Props {
    mode: Mode;
    values: Event;
    isModelOpen: boolean;
    handleCancel: () => void;
    handleCreate: (request: EventRequest) => void;
    handleUpdate: (id: string, request: EventRequest) => void;
}

export enum Mode {
    Create,
    Edit,
}

export const CreateUpdateEvent = ({
    mode,
    values,
    isModelOpen,
    handleCancel,
    handleCreate,
    handleUpdate
} : Props) => {
    const [name, setName] = useState<string>("");
    const [shortDescription, setShortDescription] = useState<string>("");
    const [longDescription, setLongDescription] = useState<string>("");
    const [place, setPlace] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
        setName(values.name);
        setShortDescription(values.short_description);
        setLongDescription(values.long_description);
        setPlace(values.place);
        setDate(values.date);
        setImageUrl(values.image);
    }, [values]);

    const handleOnOk = async () => {
        const eventRequest = {
            name,
            shortDescription,
            longDescription,
            place,
            date,
            imageUrl
        };

        mode == Mode.Create ? handleCreate(eventRequest) : handleUpdate(values.id, eventRequest)
    }

    return (
        <Modal
            title={
                mode === Mode.Create ? "Добавить мероприятие" : "Редактировать мероприятние"
            }
            open={isModelOpen}
            onOk={handleOnOk}
            onCancel={handleCancel}
            cancelText = {"Отмена"}
        >
            <div className="event__modal">
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Название"
                />
                <TextArea
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    placeholder="Описание"
                />

                <Input
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    placeholder="Место"
                />

                <Input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Дата"
                />

                <Input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Картинка"
                />
            </div>
        </Modal>
    )
};
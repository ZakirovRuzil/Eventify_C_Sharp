import Card from "antd/es/card/Card";
import {CardTitle} from "@/app/components/CardTitle";
import Button from "antd/es/button/button";

interface Props {
    events: Event[]
    handleDelete: (id: string) => void;
    handleOpen: (event: Event) => void;
}

export const Events = ({events, handleDelete, handleOpen} : Props) => {
    return (
        <div className="cards">
            {events.map((event : Event) => (
                <Card
                    key={event.id}
                    title={<CardTitle name={event.name} image={event.image}/>}
                    bordered={false}
                >
                    <p>{event.short_description}</p>
                    <div className="card__buttons">
                        <Button
                            onClick={()=>handleOpen(event)}
                            style={{ flex: 1 }}
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={()=>handleDelete(event.id)}
                            danger
                            style={{ flex: 1 }}
                        >
                            Delete
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    )
}
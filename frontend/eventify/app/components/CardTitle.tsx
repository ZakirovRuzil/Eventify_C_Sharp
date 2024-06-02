interface Props {
    name: string;
    image: string;
}

export const CardTitle = ({name, image} : Props) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <p className="card__name">{name}</p>
            <p className="card__img">{image}</p>
        </div>
    )
}
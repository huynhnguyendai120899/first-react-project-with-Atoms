import { Card } from "react-bootstrap";

const ImageAtoms = ({itemImage}) => {
    return (
        <Card.Img variant="center" src={itemImage} />
    )
}

export default ImageAtoms;
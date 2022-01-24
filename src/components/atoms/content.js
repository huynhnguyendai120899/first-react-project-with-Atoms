import { Card } from "react-bootstrap";

const ContentAtoms = ({itemText}) => {
    return (
        <Card.Text className="content">{itemText}</Card.Text>
    )
}

export default ContentAtoms;
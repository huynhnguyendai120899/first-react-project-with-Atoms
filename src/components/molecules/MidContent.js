import { Card } from "react-bootstrap";
import TitleAtoms from "../atoms/title"
import TextAtoms from "../atoms/text"


const MidContent = ({ item }) => {
  return (
    <Card>
      <Card.ImgOverlay>
        <TitleAtoms itemTitle={item.title}/>
        <TextAtoms itemText={item.text1}/>
        <TextAtoms itemText={item.text2}/>
        <TextAtoms itemText={item.text3}/>
        <TextAtoms itemText={item.text4}/>
        <TextAtoms itemText={item.text5}/>
        <TextAtoms itemText={item.text6}/>
      </Card.ImgOverlay>
    </Card>
  );
};

export default MidContent;

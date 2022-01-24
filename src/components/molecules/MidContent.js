import TitleAtoms from "../atoms/title";
import TextAtoms from "../atoms/text";
import ContentAtoms from "../atoms/content";

const MidContent = ({ item }) => {
  return (
    <div>
      <TitleAtoms itemTitle={item.title} />
      <TextAtoms itemText={item.text1} />
      <TextAtoms itemText={item.text2} />
      <TextAtoms itemText={item.text3} />
      <TextAtoms itemText={item.text4} />
      <ContentAtoms itemText={item.text5} />
      <ContentAtoms itemText={item.text6} />
    </div>
  );
};

export default MidContent;

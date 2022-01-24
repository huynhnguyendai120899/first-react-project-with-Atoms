import AtagAtoms from "../atoms/atag";

const FootButton = ({ item }) => {
    return (
        <div className="p-2 col-example text-left group-foot-button">
            <AtagAtoms itemAtag={item} />
        </div>
    );
  };
  
  export default FootButton;
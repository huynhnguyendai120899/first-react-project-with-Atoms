import ImageAtoms from "../atoms/img";

const TopLogo = ({ item }) => {
  return (
    <ImageAtoms itemImage={item.logoLink} />
  );
};

export default TopLogo;
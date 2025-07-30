import HeaderLayoutDefault from "./LayoutDefault";

const Header = ({ layout, transparent, invert, extraClass }) => {
  switch (layout) {
    case 1:
      return;

    case 2:
      return;

    default:
      return (
        <HeaderLayoutDefault
          transparent={transparent}
          invert={invert}
          extarClass={extraClass}
        />
      );
  }
};
export default Header;

import FooterLayoutDefault from "./LayoutDefault";
import FooterLayoutTwo from "./LayoutTwo";

const Footer = ({ layout, bg, instagram, extraClass }) => {
  switch (layout) {
    case 1:
      return <FooterLayoutDefault bg={bg} instagram={instagram} extraClass={extraClass} />;
    case 2:
      return <FooterLayoutTwo extraClass={extraClass} />;
    default:
      return <FooterLayoutDefault bg={bg} instagram={instagram} extraClass={extraClass} />;
  }
};
export default Footer;

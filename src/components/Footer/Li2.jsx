/* eslint-disable react/prop-types */
import Link from "next/link";

const Li2 = (props) => {
  return (
    <li className="my-md-1">
      <Link
        onClick={() => {
          window.scrollTo(0, 0); // Corrected from 0.0 to 0, 0
        }}
        className="footer-li2" // Changed class name
        href={props.path}
      >
        <span>{props.name}</span>
      </Link>
    </li>
  );
};

export default Li2;

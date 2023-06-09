/**
 * NavigationLink
 *
 * @package components
 */

import { Link } from "react-router-dom";
import styles from "./styles.module.css";

/**
 *
 * @param {*} props
 * @returns {JSX.Element}
 * @constructor
 */
export const NavigationLink = (props) => {
  const { title, linkPath } = props;
  return (
    <li className={styles.li}>
      <Link to={linkPath}>{title}</Link>
    </li>
  );
};

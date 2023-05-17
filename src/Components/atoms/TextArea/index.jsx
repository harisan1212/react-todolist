/**
 * TextArea
 *
 * @package components
 */

import styles from "./styles.module.css";

/**
 *
 * @param {*} props
 * @returns {JSX.Element}
 * @constructor
 */
export const TextArea = (props) => {
  /* props */
  const { disabled = false, value, placeholder, onChange } = props;

  return (
    <textarea
      className={styles.text}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

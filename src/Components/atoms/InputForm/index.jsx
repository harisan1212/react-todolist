import style from "./style.module.css";

/**
 * InputForm
 *
 * @package components
 */

/**
 * InputForm
 * @param {*} props
 * @returns
 */
export const InputForm = (props) => {
  /* props */
  const { disabled = false, value, placeholder, onChange, onKeyDown } = props;

  return (
    <input
      className={style.input}
      type="text"
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

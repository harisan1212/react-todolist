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
  const { inputValue, placeholder, handleChangeValue, handleKeyDown } = props;

  return (
    <input
      className={style.input}
      type="text"
      value={inputValue}
      placeholder={placeholder}
      onChange={handleChangeValue}
      onKeyDown={handleKeyDown}
    />
  );
};

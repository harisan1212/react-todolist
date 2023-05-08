import { InputForm } from "../../atoms/InputForm";
import style from "./style.module.css";

/**
 * AddTodo
 *
 * @package components
 */

/**
 * AddTodo
 *
 */
export const AddTodo = (props) => {
  /* propsを分割代入 */
  const { addInputValue, onChangeTodo, onKeyDown } = props;
  return (
    <div>
      <h2 className={style.subTitle}> ADD TODO</h2>
      <InputForm
        inputValue={addInputValue}
        placeholder={"New Todo"}
        handleChangeValue={onChangeTodo}
        handleKeyDown={onKeyDown}
      />
    </div>
  );
};

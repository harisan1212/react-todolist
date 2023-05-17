import { useState } from "react";
import { InputForm } from "../../atoms/InputForm";
import styles from "./style.module.css";
import { BaseLayout } from "../../Organisms/BaseLayout";
import { useNavigate } from "react-router-dom";
import { NAVIGATION_PATH } from "../../../constants/navigations";

import { useTodoContext } from "../../../contexts/TodoContext";
import { CommonButton } from "../../atoms/CommonButton";
import { TextArea } from "../../atoms/TextArea";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoCreateTemplate = () => {
  const navigate = useNavigate();

  const { addTodo } = useTodoContext();

  /* localState */
  const [inputValue, setInputValue] = useState("");
  const [inputContent, setInputContent] = useState("");

  /* 「Title」変更処理 */
  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  /* 「Content」変更処理 */
  const handleChangeContent = (e) => {
    setInputContent(e.target.value);
  };

  /*Todoの追加処理 */
  const handleCreateTodo = (e) => {
    e.preventDefault();
    if ((inputValue !== "", inputContent !== "")) {
      addTodo(inputValue, inputContent);
      navigate(NAVIGATION_PATH.TOP);
    }
  };

  return (
    <BaseLayout title={"Create Todo"}>
      {/* Todo追加エリア*/}
      <form className={styles.container} onSubmit={handleCreateTodo}>
        <div className={styles.area}>
          <InputForm
            value={inputValue}
            placeholder={"Title"}
            onChange={handleChangeValue}
          />
        </div>
        <div className={styles.area}>
          <TextArea
            value={inputContent}
            placeholder={"Content"}
            onChange={handleChangeContent}
          />
        </div>
        <div className={styles.area}>
          <CommonButton type={"submit"} label={"Create Todo"} />
        </div>
      </form>
    </BaseLayout>
  );
};

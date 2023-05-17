/**
 * TodoEditTemplate
 *
 * @package components
 */

import { useTodoContext } from "../../../contexts/TodoContext";
import { CommonButton } from "../../atoms/CommonButton";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { BaseLayout } from "../../Organisms/BaseLayout";
import styles from "./styles.module.css";
import { useTodoEditTemplate } from "./useTodoEditTemplate";

export const TodoEditTemplate = () => {
  const { originTodolist, updateTodo } = useTodoContext();
  const [
    { todo, inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleUpdateTodo },
  ] = useTodoEditTemplate({ originTodolist, updateTodo });

  return (
    <BaseLayout title={"TodoEdit"}>
      {!!todo && (
        <form className={styles.container} onSubmit={handleUpdateTodo}>
          <div>
            <InputForm
              value={inputTitle}
              placeholder={"Title"}
              onChange={handleChangeTitle}
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
            <CommonButton type={"submit"} label={"Edit Todo"} />
          </div>
        </form>
      )}
    </BaseLayout>
  );
};

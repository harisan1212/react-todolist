import styles from "./styles.module.css";
import { TodoList } from "../../Organisms/TodoList";
import { InputForm } from "../../atoms/InputForm";
import { useTodoContext } from "../../../contexts/TodoContext";
import { BaseLayout } from "../../Organisms/BaseLayout";
import { useTodoTemplate } from "./useTodoTemplate";

export const TodoTemplate = () => {
  const {
    // inputValue,
    // searchKeyword,
    // showTodoList,
    // handleChange,
    // handleAddTodo,
    // handleChangSerchKeyword,
    // handleDeleteTodo,
    originTodolist,
    deleteTodo,
  } = useTodoContext();

  const [{ searchKeyword, showTodoList }, { handleChangSerchKeyword }] =
    useTodoTemplate({ originTodolist });

  return (
    <BaseLayout title={"todoList"}>
      <div className={styles.container}>
        <div className={styles.area}>
          <InputForm
            value={searchKeyword}
            placeholder={"Search Keyword"}
            onChange={handleChangSerchKeyword}
          />
        </div>
        <div className={styles.area}>
          {showTodoList.length > 0 && (
            <TodoList todoList={showTodoList} handleDeleteTodo={deleteTodo} />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

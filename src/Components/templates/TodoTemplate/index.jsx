import styles from "./styles.module.css";
import { AddTodo } from "../../Organisms/AddTodo";
import { TodoList } from "../../Organisms/TodoList";
import { InputForm } from "../../atoms/InputForm";
import { useTodoContext } from "../../../contexts/TodoContext";

export const TodoTemplate = () => {
  const {
    inputValue,
    searchKeyword,
    showTodoList,
    handleChange,
    handleAddTodo,
    handleChangSerchKeyword,
    handleDeleteTodo,
  } = useTodoContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* Todo追加エリア*/}
      <section className={styles.common}>
        <AddTodo
          addInputValue={inputValue}
          onChangeTodo={handleChange}
          onKeyDown={handleAddTodo}
        />
      </section>
      {/* Todo検索エリア*/}
      <section className={styles.common}>
        <InputForm
          inputValue={searchKeyword}
          placeholder={"Search Keyword"}
          handleChangeValue={handleChangSerchKeyword}
        />
      </section>
      {/* Todoリスト表示エリア */}
      <section className={styles.common}>
        {showTodoList.length > 0 && (
          <TodoList
            todoList={showTodoList}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </section>
    </div>
  );
};

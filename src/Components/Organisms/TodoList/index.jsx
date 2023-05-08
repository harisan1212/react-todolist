import styles from "./style.module.css";

/**
 * TodoList
 *
 * @package components
 */

/**
 * TodoList
 *
 */

export const TodoList = (props) => {
  const { todoList, handleDeleteTodo } = props;

  return (
    <ul className={styles.list}>
      {todoList.map((todo) => {
        return (
          <li key={todo.id} className={styles.todo}>
            <span className={styles.task}>{todo.title}</span>
            <div className={styles.far}>
              <button
                onClick={() => {
                  handleDeleteTodo(todo.id, todo.title);
                }}
              >
                消去
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

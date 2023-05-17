import { useCallback } from "react";
import {
  faFile,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { NAVIGATION_PATH } from "../../../constants/navigations";
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

  {
    /* https://qiita.com/apollo_program/items/53e733c400ee266289b3 */
  }
  //react routerで画面遷移時に組み合わせる
  const navigate = useNavigate();

  //useCallbackでメモ化
  /**
   * 詳細ページに遷移する処理
   * @param {*} id
   * @type {function(*): void}
   */
  const handleMoveDetailPage = useCallback(
    (id) => {
      navigate(`${NAVIGATION_PATH.DETAIL}${id}`);
    },
    [navigate]
  );

  /**
   * 編集ページに遷移する処理
   * @param {*} id
   * @type {function(*): void}
   */
  const handleMoveEditPage = useCallback(
    (id) => {
      navigate(`${NAVIGATION_PATH.EDIT}${id}`);
    },
    [navigate]
  );

  return (
    <ul className={styles.list}>
      {todoList.map((todo) => {
        return (
          <li key={todo.id} className={styles.todo}>
            <span className={styles.task}>{todo.title}</span>
            <div className={styles.area}>
              <div className={styles.far}>
                {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
                <FontAwesomeIcon
                  icon={faFile}
                  size="lg"
                  onClick={() => {
                    handleMoveDetailPage(todo.id);
                  }}
                />
              </div>
              <div className={styles.far}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size="lg"
                  onClick={() => {
                    handleMoveEditPage(todo.id);
                  }}
                />
              </div>
              <div className={styles.far}>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  size="lg"
                  onClick={() => {
                    handleDeleteTodo(todo.id, todo.title);
                  }}
                />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

/**
 * useTodoEditTemplate
 *
 * @package hooks
 */
import { useNavigate, useParams } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";
import { NAVIGATION_PATH } from "../../../constants/navigations";

/**
 * useTodoEditTemplate
 * @param originTodolist
 * @param updateTodo
 */
export const useTodoEditTemplate = ({ originTodolist, updateTodo }) => {
  const navigate = useNavigate();

  //URLパラメータからIDを取得している
  const { id } = useParams();

  const todo = useMemo(
    () => originTodolist.find((todo) => String(todo.id) === id),
    [id, originTodolist]
  );

  /* local State */
  const [inputTitle, setInputTitle] = useState(todo?.title || "");
  const [inputContent, setInputContent] = useState(todo?.content || "");

  /**
   * 「Title」変更処理
   * @type {function(*):void}
   */
  const handleChangeTitle = (e) => {
    setInputTitle(e.target.value);
  };

  /**
   * 「Content」変更処理
   * @type {function(*):void}
   */
  const handleChangeContent = (e) => {
    setInputContent(e.target.value);
  };

  /**
   * Todoの更新処理
   *  @type {function(*):void}
   */
  const handleUpdateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (!!todo?.id && inputTitle !== "" && inputContent !== "") {
        updateTodo(todo.id, inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [navigate, todo?.id, inputTitle, inputContent, updateTodo]
  );

  const state = {
    todo,
    inputTitle,
    inputContent,
  };

  const action = {
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  };

  return [state, action];
};

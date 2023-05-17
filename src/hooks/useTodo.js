/**
 * カスタムフック
 * React hooksの処理をコンポーネントに直接書くのではなく、
 * 別ファイルに切り出して新しいhooksとして定義した関数のことをカスタムフックと言います。
 *
 * @package hooks
 */

import { useState, useCallback } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

/**
 * useTodo
 */
export const useTodo = () => {
  /* todolist */
  const [originTodolist, setOriginTodolist] = useState(INIT_TODO_LIST);
  /* todolist採番ID */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  /**
   * Todo新規登録処理
   * @param {*}title
   * @param {*}content
   * @type {function(*,*):void}
   */
  const addTodo = useCallback(
    (title, content) => {
      const nextUniqueId = uniqueId + 1;
      const newTodolist = [
        ...originTodolist,
        {
          id: nextUniqueId,
          title: title,
          content: content,
        },
      ];
      setOriginTodolist(newTodolist);
      setUniqueId(nextUniqueId);
    },
    [uniqueId, originTodolist]
  );

  /**
   * Todoの更新処理
   *
   * @param {*}id
   * @param {*}title
   * @param {*}content
   * @type {function(*,*,*):void}
   */
  const updateTodo = useCallback(
    (id, title, content) => {
      const updateTodolist = originTodolist.map((todo) => {
        if (id === todo.id) {
          return {
            id: todo.id,
            title: title,
            content: content,
          };
        }
        return todo;
      });
      setOriginTodolist(updateTodolist);
    },
    [originTodolist]
  );

  /**
   * TodoListの削除処理
   * @param {number} targetId
   * @param {string} targetTitle
   * @type {function(*,*):void}
   */
  const deleteTodo = useCallback(
    (targetId, targetTitle) => {
      if (window.confirm(`「${targetTitle}」のtodoを削除いたしますか?`)) {
        const newTodolist = originTodolist.filter(
          (todo) => todo.id !== targetId
        );
        setOriginTodolist(newTodolist);
      }
    },
    [originTodolist]
  );

  return {
    originTodolist,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};

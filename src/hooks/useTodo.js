/**
 * カスタムフック
 * React hooksの処理をコンポーネントに直接書くのではなく、
 * 別ファイルに切り出して新しいhooksとして定義した関数のことをカスタムフックと言います。
 *
 * @package hooks
 */

import { useState, useMemo, useCallback } from "react";

/**
 * useTodo
 */
export const useTodo = () => {
  /* addTodoの入力値　*/
  const [inputValue, setInputValue] = useState("");
  /* 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState("");
  /* todolist */
  const [originTodolist, setOriginTodolist] = useState([
    { id: 1, title: "Todo1", content: "Todo1 content" },
    { id: 2, title: "Todo2", content: "Todo2 content" },
  ]);

  /**
   * Todo新規登録処理
   * @param {*}title
   * @param {*}content
   */
  const addTodo = useCallback(
    (title, content) => {
      const newTodolist = [
        ...originTodolist,
        {
          id: originTodolist.length + 1,
          title: title,
          content: content,
        },
      ];
      setOriginTodolist(newTodolist);
    },
    [originTodolist]
  );

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
    // inputValue,
    // searchKeyword,
    // showTodoList,
    // handleChange,
    // handleAddTodo,
    // handleChangSerchKeyword,
    // handleDeleteTodo,
    originTodolist,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};

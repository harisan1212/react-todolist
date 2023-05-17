import { useState, useMemo, useCallback } from "react";

/**
 * useTodoTemplate
 * @package hooks
 *
 */

export const useTodoTemplate = ({ originTodolist }) => {
  /* 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState("");
  /*表示用TodoList */
  const showTodoList = useMemo(() => {
    const regexp = new RegExp("^" + searchKeyword, "i");
    return originTodolist.filter((todo) => {
      return todo.title.match(regexp);
    });
  }, [originTodolist, searchKeyword]);

  /* action */
  /**
   * 検索キーワードの変更処理
   * @param {*} e
   */
  const handleChangSerchKeyword = useCallback((e) => {
    setSearchKeyword(e.target.value);
  }, []);

  const state = {
    searchKeyword,
    showTodoList,
  };

  const action = {
    handleChangSerchKeyword,
  };

  return [state, action];
};

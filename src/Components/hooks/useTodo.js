/**
 * カスタムフック
 * React hooksの処理をコンポーネントに直接書くのではなく、
 * 別ファイルに切り出して新しいhooksとして定義した関数のことをカスタムフックと言います。
 *
 * @package hooks
 */

import { useState, useMemo } from "react";

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
    { id: 1, title: "Todo1" },
    { id: 2, title: "Todo2" },
  ]);
  /* 表示用TodoList */
  const showTodoList = useMemo(() => {
    return originTodolist.filter((todo) => {
      //検索キーワードに部分一致したtodoだけを一覧に表示する
      //正規表現を使用するため、RegExpを使用
      //第一引数はsearchKeywordの最初の文字列を検索、第二引数=フラグ(iは大文字と小文字を区別しない)
      const regexp = new RegExp("^" + searchKeyword, "i");
      return todo.title.match(regexp);
    });
  }, [originTodolist, searchKeyword]);

  /* action */
  /**
   * addTodoの変更処理
   * @param {*} e
   */
  const handleChange = (e) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
  };

  /* action */
  /**
   * 検索キーワードの変更処理
   * @param {*} e
   */
  const handleChangSerchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  /**
   * Todo新規登録処理
   */
  const handleAddTodo = (e) => {
    //エンターキー押下かつ、inputValueの値が空でない場合
    if (e.key === "Enter" && inputValue !== "") {
      //console.log(originTodolist);
      const newTodolist = [
        ...originTodolist,
        { id: originTodolist.length + 1, title: inputValue },
      ];
      //todoListを更新する
      setOriginTodolist(newTodolist);
      //console.log(newTodolist);
      setInputValue("");
    }
  };

  /**
   * TodoListの削除処理
   * @param {number} targetId
   * @param {string} targetTitle
   */
  const handleDeleteTodo = (targetId, targetTitle) => {
    //WEBページ上に確認ダイアログボックスを表示させるメソッド
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      const newTodolist = originTodolist.filter((todo) => todo.id !== targetId);
      setOriginTodolist(newTodolist);
    }
  };

  const state = {
    inputValue,
    searchKeyword,
    showTodoList,
  };

  const action = {
    handleChange,
    handleAddTodo,
    handleChangSerchKeyword,
    handleDeleteTodo,
  };

  return [state, action];
};

import { createContext, useContext } from "react";
import { useTodo } from "../hooks/useTodo";

/**
 * todoContext
 * contextオブジェクトを作成
 */
const TodoContext = createContext();

/**
 *
 * @param children
 * @constructor
 */
export const TodoProvider = ({ children }) => {
  // カスタムフックから状態とロジックを呼び出してコンテキストプロバイダーに割り当てる
  const {
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
  } = useTodo();

  return (
    //providerを使用し、渡すデータを入れる
    //渡されたvalueオブジェクトを使って、アプリ全体で使用することができるデータを提供します。
    <TodoContext.Provider
      value={{
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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};

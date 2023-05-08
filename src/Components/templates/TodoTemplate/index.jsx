import React, { useState } from "react";
import styles from "./styles.module.css";
import { AddTodo } from "../../Organisms/AddTodo";
import { TodoList } from "../../Organisms/TodoList";

export const TodoTemplate = () => {
  /* addTodoの入力値　*/
  const [inputValue, setInputValue] = useState("");

  /* action */
  /**
   * addTodoの変更処理
   * @param {*} e
   */
  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  /**
   * Todo新規登録処理
   */
  const handleAddTodo = (e) => {
    //エンターキー押下かつ、inputValueの値が空でない場合True
    if ((e.key = "Enter" && inputValue !== "")) {
      console.log("hello!!");
    }
  };

  /* todolist */
  const [originTodolist, SetOriginTodolist] = useState(["todo1", "todo2"]);

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
        <input type="text" placeholder="Search Keyword" />
      </section>
      {/* Todoリスト表示エリア */}
      {<TodoList originTodolist={originTodolist} />}
    </div>
  );
};

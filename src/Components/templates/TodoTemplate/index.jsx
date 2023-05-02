import React, { useState } from "react";
import styles from "./styles.module.css";
import { AddTodo } from "../../../Organisms/AddTodo";

export const TodoTemplate = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  /**
   * Todo新規登録処理
   */
  const handleAddTodo = (e) => {
    if ((e.key = "Enter" && inputValue !== "")) {
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* Todo追加エリア*/}
      <section className={styles.common}>
        <AddTodo />
        <input
          type="text"
          placeholder="New Todo"
          value={inputValue}
          onChange={(e) => {
            handleChange(e);
            //onKeyDown={エンターを押した際にイベントを発火}
          }}
        />
      </section>
      {/* Todo検索エリア*/}
      <section className={styles.common}>
        <input type="text" placeholder="Search Keyword" />
      </section>
      {/* Todoリスト表示エリア */}
    </div>
  );
};

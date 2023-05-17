import { useTodoContext } from "../../../contexts/TodoContext";
import { BaseLayout } from "../../Organisms/BaseLayout";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";

export const TodoDetailTemplate = () => {
  const { originTodolist } = useTodoContext();
  const { id } = useParams();
  const todo = originTodolist.find((todo) => {
    return String(todo.id) === id;
  });

  return (
    <BaseLayout title={"Todo Detail"}>
      {!!todo && (
        <div classname={styles.container}>
          <div classname={styles.area}>
            <InputForm disabled value={todo.title} placeholder={"Title"} />
          </div>
          <div className={styles.area}>
            <TextArea disabled value={todo.content} placeholder={"Content"} />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};

/**
 * TodoPage
 *
 * @package pages
 */
import { TodoTemplate } from "../Components/templates/TodoTemplate";
import { TodoProvider } from "../contexts/TodoContext";

/**
 * TodoPage
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoPage = () => (
  <TodoProvider>
    <TodoTemplate />;
  </TodoProvider>
);

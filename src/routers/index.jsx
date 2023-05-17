import { createBrowserRouter } from "react-router-dom";
import { NAVIGATION_LIST } from "../constants/navigations";
import { CreatePage } from "../pages/create";
import { TodoPage } from "../pages/todo";
import { EditPage } from "../pages/edit";
import { DetailPage } from "../pages/detail";

export const router = createBrowserRouter([
  {
    path: NAVIGATION_LIST.TOP,
    element: <TodoPage />,
  },
  {
    path: NAVIGATION_LIST.CREATE,
    element: <CreatePage />,
  },
  {
    path: NAVIGATION_LIST.EDIT,
    element: <EditPage />,
  },
  {
    path: NAVIGATION_LIST.DETAIL,
    element: <DetailPage />,
  },
]);

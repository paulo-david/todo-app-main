import Item from "../Item";
import ListWrapper from "./styles";

import { useAppSelector as useSelector } from "../../store/hooks";

const List = () => {
  const task_list = useSelector((state) => state.tasks.task_list);

  console.log(task_list);

  return (
    <ListWrapper>
      {task_list.map((task) => (
        <Item key={task.id} task={task}></Item>
      ))}
    </ListWrapper>
  );
};

export default List;

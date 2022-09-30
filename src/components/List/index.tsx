import Item from "../Item";
import ListWrapper, { ListFooter, Filter } from "./styles";

import { useState } from "react";
import { useAppSelector as useSelector } from "../../store/hooks";

const List = () => {
  const isDarkMode = useSelector((state) => state.themes.isDarkMode);
  const [filter, setFilter] = useState("all");
  const task_list = useSelector((state) => state.tasks.task_list);

  const handleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selected = event.currentTarget.id;

    switch (selected) {
      case "all":
        setFilter("all");
        break;
      case "active":
        setFilter("false");
        break;
      case "completed":
        setFilter("true");
        break;
    }
  };

  return (
    <ListWrapper>
      {task_list
        .filter(
          (task) => filter === "all" || filter === String(task.is_completed)
        )
        .map((task) => (
          <Item key={task.id} task={task}></Item>
        ))}

      <ListFooter isDarkMode={isDarkMode}>
        <p className="info">
          {task_list.reduce(
            (prev, curr) => prev + Number(!curr.is_completed),
            0
          )}{" "}
          items left
        </p>

        <Filter id="filters" filter={filter}>
          <button id="all" onClick={handleFilter}>
            All
          </button>
          <button id="active" onClick={handleFilter}>
            Active
          </button>
          <button id="completed" onClick={handleFilter}>
            Completed
          </button>
        </Filter>

        <button id="clearCompleted">Clear Completed</button>
      </ListFooter>
    </ListWrapper>
  );
};

export default List;

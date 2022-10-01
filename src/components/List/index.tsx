import Item from "../Item";
import ListWrapper, { Spacer, ListFooter, Filter } from "./styles";

import React, { useEffect, useRef, useState } from "react";

import store from "../../store/store";
import { useAppSelector as useSelector } from "../../store/hooks";
import { delete_completedTasks } from "../../store/tasks/taskSlice";

const List = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(ref!.current!["offsetWidth"]);
  }, [ref]);

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

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    store.dispatch(delete_completedTasks({}));
  };

  return (
    <ListWrapper ref={ref}>
      {task_list
        .filter(
          (task) => filter === "all" || filter === String(task.is_completed)
        )
        .map((task) => (
          <>
            <Item key={task.id} task={task}></Item>
            <Spacer key={task.id + "spacer"} className="spacer"></Spacer>
          </>
        ))}
      <ListFooter isDarkMode={isDarkMode}>
        <p className="info">
          {task_list.reduce(
            (prev, curr) => prev + Number(!curr.is_completed),
            0
          )}{" "}
          items left
        </p>

        {width > 373 ? (
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
        ) : (
          ""
        )}

        <button id="clearCompleted" onClick={handleDelete}>
          Clear Completed
        </button>
      </ListFooter>

      {width < 373 ? (
        <ListFooter isDarkMode={isDarkMode}>
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
        </ListFooter>
      ) : (
        ""
      )}
    </ListWrapper>
  );
};

export default List;

import ItemWrapper from "./styles";
import checkIcon from "../../images/icons/icon-check.svg";
import crossIcon from "../../images/icons/icon-cross.svg";

import {
  Task,
  TaskDetail,
  update_task,
  delete_task,
} from "../../store/tasks/taskSlice";
import store from "../../store/store";

import { useAppSelector as useSelector } from "../../store/hooks";

type Props = {
  task: Task;
};

const Item = ({ task }: Props) => {
  const isDarkMode = useSelector((state) => state.themes.isDarkMode);

  const toggle_taskStatus = () => {
    const updated_task: TaskDetail = {
      id: task.id || "",
      is_completed: !task.is_completed,
    };

    store.dispatch(update_task(updated_task));
  };

  const delete_task_manual = () => {
    const deleted_task: TaskDetail = {
      id: task.id || "",
    };

    store.dispatch(delete_task(deleted_task));
  };

  return (
    <ItemWrapper isDarkMode={isDarkMode} isCompleted={task.is_completed}>
      <div
        className="circle"
        onClick={toggle_taskStatus}
      >
        {task.is_completed ? (
          <img src={checkIcon} alt="checkIcon" />
        ) : (
          <div className="checkIcon_background"></div>
        )}
      </div>
      <p className="task_description">{task.description}</p>

      <img
        className="delete_btn"
        onClick={delete_task_manual}
        src={crossIcon}
        alt="crossIcon"
      />
    </ItemWrapper>
  );
};

export default Item;

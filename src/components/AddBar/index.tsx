import React, { useState } from "react";
import { useAppSelector as useSelector } from "../../store/hooks";

import AddBarWrapper from "./styles";
import ItemWrapper from "../Item/styles";
import checkIcon from "../../images/icons/icon-check.svg";
import store from "../../store/store";
import { addTask_automatic_Id } from "../../store/tasks/taskSlice";

const AddBar = () => {
  const isDarkMode = useSelector((state) => state.themes.isDarkMode);

  const [isCompleted, setIsCompleted] = useState(false);

  const toggle_isCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  const initialState = "Create a new todo...";
  const [description, setDescription] = useState(initialState);

  const update_description = (event: React.FormEvent<HTMLInputElement>) => {
    setDescription(event.currentTarget.value);
  };

  const add_task_manual = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setDescription(initialState);
      store.dispatch(
        addTask_automatic_Id({
          description: description,
          is_completed: isCompleted,
        })
      );
    }
  };

  return (
    <AddBarWrapper isDarkMode={isDarkMode}>
      <ItemWrapper isCompleted={isCompleted} isDarkMode={isDarkMode}>
        <div className="circle" onClick={toggle_isCompleted}>
          {isCompleted ? (
            <img src={checkIcon} alt="checkIcon" />
          ) : (
            <div className="checkIcon_background"></div>
          )}
        </div>
        <input
          id="input_description"
          className="task_description"
          value={description}
          onChange={update_description}
          onKeyDown={add_task_manual}
        ></input>

        <div id="empty"></div>
      </ItemWrapper>
    </AddBarWrapper>
  );
};

export default AddBar;

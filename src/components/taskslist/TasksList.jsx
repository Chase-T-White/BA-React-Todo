import React from "react";
import Task from "./Task";
import { useTasksContext } from "../../context/taskContext";

const TasksList = () => {
  const { tasksList } = useTasksContext();
  return (
    <ul>
      {tasksList.map((item) => {
        return <Task {...item} />;
      })}
    </ul>
  );
};

export default TasksList;

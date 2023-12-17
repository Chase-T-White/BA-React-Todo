import React, { useState, useEffect, useContext } from "react";
import { uid } from "uid";
import { checkStorage, updateStorage } from "../functions/storageFunctions";

const TasksContext = React.createContext();

const TasksProvider = ({ children }) => {
  const [tasksList, setTasksList] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isYes, setIsYes] = useState(false);

  useEffect(() => {
    // updateStorage([]);
    checkStorage(setTasksList);
  }, []);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }
    updateStorage(tasksList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksList]);

  const createTask = (newTaskData) => {
    const newTask = { ...newTaskData, id: uid(), isCompleted: false };
    setTasksList([...tasksList, newTask]);
  };

  const updatedTask = (editedTask) => {
    const updatedTaskList = tasksList.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasksList(updatedTaskList);
  };

  const deleteSingleTask = (id) => {
    const newTaskList = tasksList.filter((task) => task.id !== id);
    setTasksList(newTaskList);
  };

  const deleteTasks = () => {
    setTasksList([]);
  };

  return (
    <TasksContext.Provider
      value={{
        tasksList,
        createTask,
        updatedTask,
        deleteSingleTask,
        deleteTasks,
        isShowModal,
        setIsShowModal,
        modalMessage,
        setModalMessage,
        isYes,
        setIsYes,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  return useContext(TasksContext);
};

export { TasksContext, TasksProvider };

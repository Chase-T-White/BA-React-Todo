import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useTasksContext } from "../context/taskContext";
import MainTaskDetails from "../components/taskslist/MainTaskDetails";

const TaskPage = () => {
  const { id } = useParams();
  const { tasksList } = useTasksContext();
  const navigate = useNavigate();

  const [selectedTask] = tasksList.filter((tasks) => tasks.id === id);
  console.log(selectedTask);
  const {
    task,
    complexity,
    priority,
    dueBy,
    createdAt,
    subTasks,
    tags,
    isCompleted,
  } = selectedTask;

  return (
    <article>
      <header>
        <div
          className="back-button bordered"
          onClick={() => navigate("/")}
          title="Home"
        >
          <IoIosArrowRoundBack className="icon-large" />
        </div>
        <h3>Task Details</h3>
      </header>
      <MainTaskDetails
        task={task}
        dueBy={dueBy}
        createdAt={createdAt}
        priority={priority}
        complexity={complexity}
      />
    </article>
  );
};

export default TaskPage;

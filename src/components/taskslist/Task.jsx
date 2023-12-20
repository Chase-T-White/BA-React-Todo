import { CiEdit, CiTrash } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CircleProgressBar from "./CircleProgressBar";
import MainTaskDetails from "./MainTaskDetails";
import { useTasksContext } from "../../context/taskContext";
import { uid } from "uid";

const Task = ({
  id,
  task,
  complexity,
  priority,
  dueBy,
  createdAt,
  subTasks,
  tags,
}) => {
  const navigate = useNavigate();
  const { toggleCompleted, deleteSingleTask } = useTasksContext();

  return (
    <ListItem>
      <MainTaskDetails
        task={task}
        dueBy={dueBy}
        createdAt={createdAt}
        priority={priority}
        complexity={complexity}
      />
      {subTasks.length > 0 && <CircleProgressBar subTasks={subTasks} />}
      <div className="task-additions">
        {tags.length > 0 && (
          <ul className="tags-list">
            {tags.map((tag) => {
              return <li key={uid()}>{tag}</li>;
            })}
          </ul>
        )}
        <div className="container tl-wrapper">
          <div className="container task-links">
            <div
              className="task-icon"
              onClick={() => toggleCompleted(id)}
              title="Mark Complete"
            >
              <IoMdCheckmark />
            </div>
            <div
              className="task-icon"
              onClick={() => navigate(`editTask/${id}`)}
              title="Edit"
            >
              <CiEdit />
            </div>
            <div
              className="task-icon"
              onClick={() => deleteSingleTask(id)}
              title="Delete"
            >
              <CiTrash />
            </div>
          </div>
          <Link to={`task/${id}`}>Task Details</Link>
        </div>
      </div>
    </ListItem>
  );
};

export default Task;

const ListItem = styled.li`
  position: relative;
  max-width: 350px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  background-color: var(--background-shade);
  border: 4px inset #88929f;

  header {
    margin-bottom: 1rem;
  }
  .task-additions {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  .tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-bottom: 0.75rem;
  }
  li {
    padding: 2px 4px;
    background-color: var(--background);
    border: 2px inset #88929f;
  }
  .container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .tl-wrapper {
    justify-content: space-between;
  }
  .task-icon {
    cursor: pointer;
    font-size: 1.25rem;
  }
`;

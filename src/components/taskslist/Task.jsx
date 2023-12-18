import { CiEdit, CiTrash } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainTaskDetails from "./MainTaskDetails";
import { useTasksContext } from "../../context/taskContext";

const Task = ({
  id,
  task,
  complexity,
  priority,
  dueBy,
  createdAt,
  subTasks,
  tags,
  isCompleted,
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
      <div className="task-additions">
        {tags.length > 0 && (
          <ul>
            {tags.map((tag) => {
              return <li key={tag.id}>{tag.tag}</li>;
            })}
          </ul>
        )}
        <div className="container tl-wrapper">
          <div className="container task-links">
            <div onClick={() => toggleCompleted(id)}>
              <IoMdCheckmark />
            </div>
            <div onClick={() => navigate(`editTask/${id}`)}>
              <CiEdit />
            </div>
            <div onClick={() => deleteSingleTask(id)}>
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
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
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
`;

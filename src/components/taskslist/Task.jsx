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
      <div>
        <ul>
          {tags.map((tag) => {
            return <li key={tag.id}>{tag.tag}</li>;
          })}
        </ul>
        <div className="container">
          <div className="container">
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

  header {
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

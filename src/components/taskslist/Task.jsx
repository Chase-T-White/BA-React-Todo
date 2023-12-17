import { CiCalendarDate, CiEdit, CiTrash } from "react-icons/ci";
import { IoIosArrowRoundUp, IoMdCheckmark } from "react-icons/io";
import { BsArrowsMove } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTasksContext } from "../../context/taskContext";
// import healthBarTimer from "../../functions/healthBarTimer";

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
  const { deleteSingleTask } = useTasksContext();
  // const [healthBarRemaining, headsUpMessage] = healthBarTimer(
  //   dueBy.dueDate,
  //   createdAt
  // );
  return (
    <ListItem>
      <header
      // style={{
      //   backgroundImage: `linear-gradient(to right, green 0 ${healthBarRemaining}%, red ${healthBarRemaining}% 100%)`,
      // }}
      >
        <h6>{task}</h6>
      </header>
      <div>
        <div className="container">
          <CiCalendarDate />
          <p>
            Due Date: <span>actual date and time</span>
          </p>
        </div>
        <div className="container">
          <IoIosArrowRoundUp />
          <p>
            Priority: <span>values here</span>
          </p>
        </div>
        <div className="container">
          <BsArrowsMove />
          <p>
            Complexity: <span>values here</span>
          </p>
        </div>
        <ul>
          {tags.map((tag) => {
            return <li key={tag.id}>{tag.tag}</li>;
          })}
        </ul>
        <div className="container">
          <div className="container">
            <div>
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

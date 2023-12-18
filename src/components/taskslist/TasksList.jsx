import styled from "styled-components";
import Task from "./Task";
import { useTasksContext } from "../../context/taskContext";

const TasksList = () => {
  const { tasksList } = useTasksContext();
  return (
    <Wrapper>
      <ul>
        {tasksList
          .filter((item) => item.isCompleted === false)
          .map((item) => {
            return <Task key={item.id} {...item} />;
          })}
      </ul>
      <h4>Completed</h4>
      <ul>
        {tasksList
          .filter((item) => item.isCompleted === true)
          .map((item) => {
            return <Task key={item.id} {...item} />;
          })}
      </ul>
    </Wrapper>
  );
};

export default TasksList;

const Wrapper = styled.div`
  max-width: 900px;
  height: 475px;
  margin-inline: auto;
  overflow-y: scroll;
  scrollbar-width: none;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  h4 {
    margin-block: 2rem 1rem;
    text-align: center;
  }
`;

import styled from "styled-components";
import Task from "./Task";
import { useTasksContext } from "../../context/taskContext";

const TasksList = ({ searchInput, sortBy, filterTags }) => {
  const { tasksList } = useTasksContext();

  const filteredSortedList = tasksList
    .filter((item) => {
      if (searchInput) {
        return item.task.toLowerCase().startsWith(searchInput.toLowerCase());
      }
      return item;
    })
    .filter((item) => {
      if (filterTags.length > 0) {
        let hasTag = false;
        for (const tag of filterTags) {
          if (item.tags.includes(tag)) {
            hasTag = true;
            break;
          }
        }
        return hasTag ? item : null;
      }
      return item;
    })
    .sort((a, b) => {
      if (sortBy === 1) {
        return (
          Date.parse(a.dueBy.dueDate + " " + a.dueBy.time) -
          Date.parse(b.dueBy.dueDate + " " + b.dueBy.time)
        );
      } else if (sortBy === 2) {
        return (
          Date.parse(b.dueBy.dueDate + " " + b.dueBy.time) -
          Date.parse(a.dueBy.dueDate + " " + a.dueBy.time)
        );
      } else if (sortBy === 3) {
        return Number(b.priority) - Number(a.priority);
      } else if (sortBy === 4) {
        return Number(a.priority) - Number(b.priority);
      } else if (sortBy === 5) {
        return Number(b.complexity) - Number(a.complexity);
      } else if (sortBy === 6) {
        return Number(a.complexity) - Number(b.complexity);
      }
      return a - b;
    });

  return (
    <Wrapper>
      <ul>
        {filteredSortedList
          .filter((item) => item.isCompleted === false)
          .map((item) => {
            return <Task key={item.id} {...item} />;
          })}
      </ul>
      <h4>Completed</h4>
      <ul>
        {filteredSortedList
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
  max-width: 1100px;
  height: 450px;
  margin-inline: auto;
  padding: 0.5rem;
  overflow-y: scroll;
  scrollbar-width: none;
  background-color: var(--background-shade2);
  border: 4px inset #323541;

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

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchForm from "../components/SearchForm";
import TasksList from "../components/taskslist/TasksList";
import { useTasksContext } from "../context/taskContext";

const Home = () => {
  const navigate = useNavigate();
  const { tasksList, deleteTasks } = useTasksContext();
  return (
    <article>
      <Wrapper>
        <h2>Todos</h2>
        <SearchForm />
        <div className="button-container">
          <button className="btn" onClick={() => navigate("/createTask")}>
            Add New Task
          </button>
          <button className="btn" onClick={deleteTasks}>
            Delete All Tasks
          </button>
        </div>
        {tasksList.length > 0 && <TasksList />}
      </Wrapper>
    </article>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100%;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .button-container {
    max-width: 400px;
    margin-inline: auto;
    margin-bottom: 2rem;

    display: flex;
    gap: 1.5rem;

    button {
      flex-basis: 50%;
    }
  }
`;

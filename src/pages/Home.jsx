import React from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import TasksList from "../components/taskslist/TasksList";

const Home = () => {
  const navigate = useNavigate();
  return (
    <article>
      <h1>Todos</h1>
      <SearchForm />
      <div>
        <button onClick={() => navigate("/createTask")}>Add New Task</button>
      </div>
      <TasksList />
    </article>
  );
};

export default Home;

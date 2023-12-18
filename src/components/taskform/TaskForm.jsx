import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import SubTaskFormSection from "./SubTaskFormSection";
import TagsFormSection from "./TagsFormSection";
import { useTasksContext } from "../../context/taskContext";

const TaskForm = ({ edit }) => {
  const { createTask, updatedTask } = useTasksContext();
  const navigate = useNavigate();
  const [subTasks, setSubTasks] = useState([]);
  const [tags, setTags] = useState([]);

  const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${year}-${month}-${day}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const name = e.target[0].value;
    const complexity = e.target[1].value;
    const priority = e.target[2].value;
    const dueDate = e.target[3].value;
    const time = e.target[4].value;
    const createdAt = getDate();
    const newTaskData = {
      task: name,
      complexity,
      priority,
      dueBy: { dueDate, time },
      createdAt,
      subTasks,
      tags,
    };
    createTask(newTaskData);
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <header>
        <div
          className="back-button bordered"
          onClick={() => navigate("/")}
          title="Home"
        >
          <IoIosArrowRoundBack className="icon-large" />
        </div>
        <h3>{edit ? "Edit Task" : "Add New Task"}</h3>
      </header>
      <section>
        <div className="taskName">
          <label htmlFor="name">Task Name</label>
          <input
            className="bordered"
            type="text"
            name="name"
            id="name"
            placeholder="Task..."
            minLength={3}
            maxLength={50}
            required
          />
        </div>
        <div className="split-container">
          <div className="wrapper">
            <label htmlFor="complexity">Complexity Level</label>
            <div>
              <input
                className="bordered input-numbers"
                type="number"
                name="complexity"
                id="complexity"
                min={1}
                max={10}
              />
            </div>
          </div>
          <div className="wrapper">
            <label htmlFor="priority">Priority Level</label>
            <div>
              <input
                className="bordered input-numbers"
                type="number"
                name="priority"
                id="priority"
                min={1}
                max={10}
              />
            </div>
          </div>
        </div>
        <div className="split-container">
          <div className="wrapper">
            <label htmlFor="dueDate">Due Date</label>
            <input
              className="bordered"
              type="date"
              name="dueDate"
              id="dueDate"
              min={getDate()}
            />
          </div>
          <div className="wrapper">
            <label htmlFor="time">Select Time</label>
            <input className="bordered" type="time" name="time" id="time" />
          </div>
        </div>
        <SubTaskFormSection subTasks={subTasks} setSubTasks={setSubTasks} />
        <TagsFormSection tags={tags} setTags={setTags} />
        <button className="btn" type="submit">
          {edit ? "Update Task" : "Add Task"}
        </button>
      </section>
    </Form>
  );
};

export default TaskForm;

const Form = styled.form`
  max-width: 500px;
  height: 100%;
  margin-inline: auto;
  font-size: 1.5rem;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    .back-button {
      border-radius: 50vw;
      display: flex;
      align-items: center;
    }

    h3 {
      margin-inline: auto;
    }
  }

  section {
    height: calc(100% - 84px);
    overflow-y: scroll;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    max-width: 275px;
    font-size: 1.25rem;
  }

  .taskName {
    display: flex;
    flex-direction: column;
  }

  .split-container {
    display: flex;
    gap: 1.5rem;

    .wrapper {
      flex: 1 1 50%;
    }

    .input-numbers {
      width: 4em;
    }
  }
`;

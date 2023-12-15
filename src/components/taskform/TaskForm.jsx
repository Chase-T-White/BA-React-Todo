import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack, IoMdClose, IoIosAdd } from "react-icons/io";
import SubTaskFormSection from "./SubTaskFormSection";

const TaskForm = ({ edit }) => {
  const navigate = useNavigate();
  const [subTasks, setSubTasks] = useState([]);
  const [tags, setTags] = useState([]);

  return (
    <Form>
      <header>
        <div className="back-button" onClick={() => navigate("/")}>
          <IoIosArrowRoundBack className="icon" />
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
          />
        </div>
        <div className="split-container">
          <div>
            <label htmlFor="complexity">Complexity Level</label>
            <input
              className="bordered"
              type="number"
              name="complexity"
              id="complexity"
              min={1}
              max={10}
            />
          </div>
          <div>
            <label htmlFor="priority">Priority Level</label>
            <input
              className="bordered"
              type="number"
              name="priority"
              id="priority"
              min={1}
              max={10}
            />
          </div>
        </div>
        <div className="split-container">
          <div>
            <label htmlFor="dueDate">Due Date</label>
            <input
              className="bordered"
              type="date"
              name="dueDate"
              id="dueDate"
            />
          </div>
          <div>
            <label htmlFor="time">Select Time</label>
            <input className="bordered" type="time" name="time" id="time" />
          </div>
        </div>
        <SubTaskFormSection subTasks={subTasks} setSubTasks={setSubTasks} />
        <div>
          <label htmlFor="tags">Add Tag</label>
          <div>
            <input
              className="bordered"
              type="text"
              name="tags"
              id="tags"
              placeholder="Add Tag..."
            />
            <div>
              <IoIosAdd />
            </div>
          </div>
        </div>
        <button className="btn">{edit ? "Update Task" : "Add Task"}</button>
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
    }
    h3 {
      margin-inline: auto;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    max-width: 300px;
    font-size: 1.25rem;
  }

  .taskName {
    display: flex;
    flex-direction: column;
  }

  .split-container {
    display: flex;
    gap: 1.5rem;

    div {
      flex: 1 1 auto;
    }
  }
`;

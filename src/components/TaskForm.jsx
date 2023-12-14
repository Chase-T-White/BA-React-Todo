import { useState } from "react";
import { IoIosArrowRoundBack, IoMdClose, IoIosAdd } from "react-icons/io";

const TaskForm = (edit = false) => {
  const [subTasks, setSubTasks] = useState([]);
  const [tags, setTags] = useState([]);

  return (
    <form>
      <header>
        <div>
          <IoIosArrowRoundBack />
        </div>
        <h3>{edit ? "Edit Task" : "Add New Task"}</h3>
      </header>
      <div>
        <label htmlFor="name">Task Name</label>
        <input type="text" name="name" id="name" placeholder="Task" />
      </div>
      <div>
        <label htmlFor="complexity">Complexity Level</label>
        <input
          type="number"
          name="complexity"
          id="complexity"
          min={1}
          max={10}
        />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <input type="number" name="priority" id="priority" min={1} max={10} />
      </div>
      <div>
        <div>
          <label htmlFor="dueDate">Due Date</label>
          <input type="date" name="dueDate" id="dueDate" />
        </div>
        <div>
          <label htmlFor="time">Select Time</label>
          <input type="time" name="time" id="time" />
        </div>
      </div>
      <div>
        <label htmlFor="subTask">Add Subtask Checklist</label>
        {subTasks.length > 0 ? (
          <ol>
            {subTasks.map((subTask) => {
              return (
                <li key={subTask.id}>
                  <p>{subTask.task}</p>
                  <div>
                    <IoMdClose />
                  </div>
                </li>
              );
            })}
          </ol>
        ) : (
          ""
        )}
        <div>
          <input
            type="text"
            name="subTask"
            id="subTask"
            placeholder="Add Subtask..."
          />
          <div>
            <IoIosAdd />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="tags">Add Tag</label>
        <div>
          <input type="text" name="tags" id="tags" placeholder="Add Tag..." />
          <div>
            <IoIosAdd />
          </div>
        </div>
      </div>
      <button>{edit ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;

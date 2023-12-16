import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { uid } from "uid";
import SubTask from "./SubTask";

const SubTaskFormSection = ({ subTasks, setSubTasks }) => {
  const [input, setInput] = useState("");

  const addToSubtasksList = () => {
    if (input) {
      setSubTasks([
        ...subTasks,
        { id: uid(), task: input, isCompleted: false },
      ]);
      setInput("");
    }
  };

  const removeSubTask = (id) => {
    const updatedSubTasks = subTasks.filter((subTask) => subTask.id !== id);
    setSubTasks(updatedSubTasks);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addToSubtasksList();
    }
  };

  return (
    <div>
      <label htmlFor="subTask">Add Subtask Checklist</label>
      {subTasks.length > 0 && (
        <ol>
          {subTasks.map((subTask) => {
            return (
              <SubTask
                key={subTask.id}
                id={subTask.id}
                task={subTask.task}
                removeSubTask={removeSubTask}
              />
            );
          })}
        </ol>
      )}
      <div>
        <input
          className="bordered"
          type="text"
          name="subTask"
          id="subTask"
          placeholder="Add Subtask..."
          value={input}
          onKeyDown={handleKeyDown}
          onChange={(e) => setInput(e.target.value)}
        />
        <div onClick={addToSubtasksList}>
          <IoIosAdd />
        </div>
      </div>
    </div>
  );
};

export default SubTaskFormSection;

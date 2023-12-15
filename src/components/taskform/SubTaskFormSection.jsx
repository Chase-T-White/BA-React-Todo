import { useState } from "react";
import { IoMdClose, IoIosAdd } from "react-icons/io";
import { uid } from "uid";

const SubTaskFormSection = ({ subTasks, setSubTasks }) => {
  const [input, setInput] = useState("");

  const addToSubtasksList = () => {
    setSubTasks([...subTasks, { id: uid(), task: input }]);
    setInput("");
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

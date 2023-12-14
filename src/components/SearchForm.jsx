import React from "react";
import { IoIosSearch, IoIosArrowRoundForward } from "react-icons/io";
import { useTasksContext } from "../context/taskContext";

const SearchForm = () => {
  const { tasksList } = useTasksContext();

  const findUniqueLabels = () => {
    const labelsArray = tasksList.flatMap((task) => task.labels);
    const uniqueLabels = new Set(labelsArray);
    return [...uniqueLabels];
  };

  return (
    <form>
      <div>
        <IoIosSearch />
        <input type="text" name="search" id="search" placeholder="Search..." />
        <div>
          <IoIosArrowRoundForward />
        </div>
      </div>
      <div>
        <div>
          <select name="sort" id="sort">
            <option value="">Default</option>
            <option value="">Ascending Due Date</option>
            <option value="">Descending Due Date</option>
            <option value="">Ascending Priority</option>
            <option value="">Descending Priority</option>
            <option value="">Ascending Complexity</option>
            <option value="">Descending Complexity</option>
          </select>
        </div>
        <div>
          <select name="labelFilter" id="labelFilter">
            {findUniqueLabels().map((label) => {
              return <option value={`${label}`}>{label}</option>;
            })}
          </select>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

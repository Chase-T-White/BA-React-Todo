import React from "react";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTasksContext } from "../context/taskContext";

const SearchForm = () => {
  const { tasksList } = useTasksContext();

  const findUniqueTags = () => {
    const tagsArray = tasksList.flatMap((task) => task.labels);
    const uniqueTags = new Set(tagsArray);
    return [...uniqueTags];
  };

  return (
    <Form>
      <div className="search bordered">
        <input type="text" name="search" id="search" placeholder="Search..." />
        <div>
          <IoIosArrowRoundForward className="icon" />
        </div>
      </div>
      <div className="dropdowns">
        <select className="bordered" name="sort" id="sort">
          <option value="">Sort</option>
          <option value="">Default</option>
          <option value="">Ascending Due Date</option>
          <option value="">Descending Due Date</option>
          <option value="">Ascending Priority</option>
          <option value="">Descending Priority</option>
          <option value="">Ascending Complexity</option>
          <option value="">Descending Complexity</option>
        </select>
        <select className="bordered" name="tagFilter" id="labelFilter">
          <option value="">Tags</option>
          {findUniqueTags().map((tag) => {
            return (
              <div className="tagSelect-container">
                <label htmlFor="tag">{tag}</label>
                <input type="checkbox" name="tag" id="tag" />
              </div>
            );
          })}
        </select>
      </div>
    </Form>
  );
};

export default SearchForm;

const Form = styled.form`
  max-width: 400px;
  margin-inline: auto;

  .search {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 0.75rem;
  }

  input {
    flex-grow: 1;
    font-size: 1rem;
    background-color: transparent;
    border: none;

    &:focus-within {
      outline: none;
    }
  }

  .dropdowns {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  select {
    flex-grow: 1;
    cursor: pointer;

    &:hover,
    &:focus {
      border-color: var(--select-green);
      outline: 1px solid var(--select-green);
    }
  }

  .tagSelect-container {
    display: flex;
    justify-content: space-between;
  }
`;

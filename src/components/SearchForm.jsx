import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { useTasksContext } from "../context/taskContext";

const SearchForm = ({ setSearchInput, setSortBy, setFilterTags }) => {
  const [isShowList, setIsShowList] = useState(false);
  const { tasksList } = useTasksContext();

  const findUniqueTags = () => {
    const tagsArray = tasksList.flatMap((task) => task.tags);
    const uniqueTags = new Set(tagsArray);
    return [...uniqueTags];
  };

  return (
    <Form>
      <div className="search bordered">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div>
          <IoIosArrowRoundForward className="icon" />
        </div>
      </div>
      <div className="dropdowns">
        <div className="bordered dropdown" name="sort" id="sort">
          <div onClick={() => setIsShowList(!isShowList)}>
            <p>Sort</p>
            <GoChevronDown />
          </div>
          <ul className={`dropdown-list ${isShowList ? "none" : ""}`}>
            <li value="">Default</li>
            <li value="dueClose">Due Date (Closest)</li>
            <li value="dueFar">Due Date (Farthest)</li>
            <li value="priorityHigh">Priority (10-1)</li>
            <li value="priorityLow">Priority (1-10)</li>
            <li value="complexityHigh">Complexity (10-1)</li>
            <li value="complexityLow">Complexity (1-10)</li>
          </ul>
        </div>
        <div className="bordered dropdown" name="tagFilter" id="labelFilter">
          <div onClick={() => setIsShowList(!isShowList)}>
            <p>Tags</p>
            <GoChevronDown />
          </div>
          <ul className={`dropdown-list ${isShowList ? "none" : ""}`}>
            {findUniqueTags().map((tag) => {
              return (
                <li className="tagSelect-container">
                  <label htmlFor="tag">{tag.tag}</label>
                  <input type="checkbox" name="tag" id="tag" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Form>
  );
};

export default SearchForm;

const Form = styled.form`
  max-width: 400px;
  margin-inline: auto;
  margin-bottom: 1.5rem;

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
    gap: 0.5rem;

    .dropdown {
      position: relative;
      flex-basis: 50%;
      cursor: pointer;

      div {
        display: flex;
        justify-content: space-between;
      }

      .none {
        display: none;
      }

      .dropdown-list {
        position: absolute;
        left: -2px;
        margin-top: 0.75rem;
        width: calc(100% + 4px);
        max-height: 100px;
        overflow-y: scroll;
        scollbar-width: none;
        z-index: 100;
        background-color: var(--background-tint2);
        border: 2px inset #88929f;

        li {
          padding: 4px 6px;

          &:hover {
            background-color: var(--background-tint);
            cursor: pointer;
          }
        }

        li + li {
          border-top: solid 1px black;
        }

        .tagSelect-container {
          display: flex;
          justify-content: space-between;

          input {
            max-width: min-content;
            min-width: 19px;
          }
        }
      }
    }
  }
`;

import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { useTasksContext } from "../context/taskContext";

const SearchForm = ({
  setSearchInput,
  setSortBy,
  filterTags,
  setFilterTags,
}) => {
  const [isShowSort, setIsShowSort] = useState(false);
  const [isShowTags, setIsShowTags] = useState(false);
  const { tasksList } = useTasksContext();

  const findUniqueTags = () => {
    const tagsArray = tasksList.flatMap((task) => task.tags);
    const uniqueTags = new Set(tagsArray);
    return [...uniqueTags];
  };

  const handleClick = (e) => {
    if (filterTags.includes(e.target.value)) {
      const removedTagList = filterTags.filter((tag) => tag !== e.target.value);
      setFilterTags(removedTagList);
    } else {
      setFilterTags([...filterTags, e.target.value]);
    }
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
          <div onClick={() => setIsShowSort(!isShowSort)}>
            <p>Sort</p>
            <GoChevronDown />
          </div>
          <ul
            className={`dropdown-list ${isShowSort ? "" : "none"}`}
            onClick={(e) => setSortBy(e.target.value)}
          >
            <li value={0}>Default</li>
            <li value={1}>Due Date (Closest)</li>
            <li value={2}>Due Date (Farthest)</li>
            <li value={3}>Priority (10-1)</li>
            <li value={4}>Priority (1-10)</li>
            <li value={5}>Complexity (10-1)</li>
            <li value={6}>Complexity (1-10)</li>
          </ul>
        </div>
        <div className="bordered dropdown" name="tagFilter" id="labelFilter">
          <div onClick={() => setIsShowTags(!isShowTags)}>
            <p>Tags</p>
            <GoChevronDown />
          </div>
          <ul className={`dropdown-list ${isShowTags ? "" : "none"}`}>
            {findUniqueTags().map((tag) => {
              return (
                <li key={tag} className="tagSelect-container">
                  <label htmlFor="tag">{tag}</label>
                  <input
                    type="checkbox"
                    name="tag"
                    id="tag"
                    value={tag}
                    onClick={handleClick}
                  />
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

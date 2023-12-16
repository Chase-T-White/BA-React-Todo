import { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { uid } from "uid";
import Tag from "./Tag";

const TagsFormSection = ({ tags, setTags }) => {
  const [input, setInput] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDuplicate(false);
    }, 3000);
  }, [isDuplicate]);

  const addToTagsList = () => {
    if (input) {
      const duplicate = tags.filter(
        (tag) => tag.tag.toLowerCase() === input.toLowerCase()
      );
      if (duplicate.length === 0) {
        setTags([...tags, { id: uid(), tag: input }]);
        setInput("");
      } else {
        setIsDuplicate(true);
      }
    }
  };

  const removeTag = (id) => {
    const updatedTags = tags.filter((tag) => tag.id !== id);
    setTags(updatedTags);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addToTagsList();
    }
  };

  return (
    <div>
      <label htmlFor="tags">Add Tag</label>
      <div>
        <div>
          <input
            className="bordered"
            type="text"
            name="tags"
            id="tags"
            placeholder="Add Tag..."
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div onClick={addToTagsList}>
            <IoIosAdd />
          </div>
        </div>
        {isDuplicate && <p>Tag Already Exists</p>}
      </div>
      {tags.length > 0 && (
        <ul>
          {tags.map((tag) => {
            return <Tag key={tag.id} {...tag} removeTag={removeTag} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default TagsFormSection;

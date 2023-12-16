import React from "react";
import { IoMdClose } from "react-icons/io";

const Tag = ({ id, tag, removeTag }) => {
  return (
    <li>
      <h6>{tag}</h6>
      <div onClick={() => removeTag(id)}>
        <IoMdClose />
      </div>
    </li>
  );
};

export default Tag;

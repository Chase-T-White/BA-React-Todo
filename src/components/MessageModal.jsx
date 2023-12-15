import React from "react";
import styled from "styled-components";
import { useTasksContext } from "../context/taskContext";

const MessageModal = () => {
  const {
    isShowModal,
    setIsShowModal,
    modalMessage,
    setModalMessage,
    setIsYes,
  } = useTasksContext();

  const handleYes = () => {
    setIsYes(true);
    setIsShowModal(false);
    setModalMessage("");
  };

  const handleNo = () => {
    setIsShowModal(false);
    setModalMessage("");
  };

  return (
    <div style={{ display: isShowModal ? "contents" : "none" }}>
      <div>
        <header>
          <h3>Hold Up!</h3>
        </header>
        <div>
          <p>{modalMessage}</p>
          <div>
            <p>Would you like to continue?</p>
            <div>
              <button onClick={handleYes}>Yes</button>
              <button onClick={handleNo}>No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;

const Modal = styled.div``;

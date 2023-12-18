import { CiCalendarDate } from "react-icons/ci";
import { IoIosArrowRoundUp } from "react-icons/io";
import { BsArrowsMove } from "react-icons/bs";
import styled from "styled-components";
import healthBarTimer from "../../functions/healthBarTimer";
import { displayDueDate } from "../../functions/displayDueDate";

const MainTaskDetails = ({ task, dueBy, createdAt, priority, complexity }) => {
  const [healthBarRemaining, headsUpMessage] = healthBarTimer(
    createdAt,
    dueBy.dueDate + " " + dueBy.time
  );

  const [displayDate, displayTime] = dueBy && displayDueDate(dueBy);

  return (
    <Wrapper>
      <header
        style={{
          backgroundImage: `linear-gradient(to right, green 0 ${healthBarRemaining}%, red ${healthBarRemaining}% 100%)`,
        }}
      >
        <h6>{task}</h6>
        {headsUpMessage && <small>{headsUpMessage}</small>}
      </header>
      <div>
        {dueBy && (
          <div className="container">
            <CiCalendarDate />
            <p>
              Due Date: <span>{`${displayDate}, ${displayTime}`}</span>
            </p>
          </div>
        )}
        {priority && (
          <div className="container">
            <IoIosArrowRoundUp />
            <p>
              Priority:{" "}
              <span>
                {Number(priority) < 4
                  ? "Low"
                  : Number(priority) < 7
                  ? "Medium"
                  : "High"}
                {` (${priority}/10)`}
              </span>
            </p>
          </div>
        )}
        {complexity && (
          <div className="container">
            <BsArrowsMove />
            <p>
              Complexity:{" "}
              <span>
                {Number(priority) < 4
                  ? "Low"
                  : Number(priority) < 7
                  ? "Medium"
                  : "High"}
                {` (${complexity}/10)`}
              </span>
            </p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default MainTaskDetails;

const Wrapper = styled.div`
  header {
    display: flex;
    justify-content: space-between;

    small {
      align-self: flex-end;
    }
  }

  .container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

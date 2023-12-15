import TaskForm from "../components/taskform/TaskForm";

const CreateTaskPage = () => {
  return (
    <article>
      <TaskForm edit={false} />
    </article>
  );
};

export default CreateTaskPage;

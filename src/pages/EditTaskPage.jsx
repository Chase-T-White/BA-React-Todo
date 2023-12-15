import TaskForm from "../components/taskform/TaskForm";

const EditTaskPage = () => {
  return (
    <article>
      <TaskForm edit={true} />
    </article>
  );
};

export default EditTaskPage;

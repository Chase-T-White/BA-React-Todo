import TaskForm from "../components/TaskForm";

const EditTaskPage = () => {
  return (
    <article>
      <TaskForm edit={true} />
    </article>
  );
};

export default EditTaskPage;

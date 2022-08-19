import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../hooks/use-http';

const NewTask = (props) => {

  const {isLoading, error, sendRequests: createTask} = useHttp();
  const createNewTask = (taskText,data) => {
    
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    createTask({url: 'https://king-movie-215ed-default-rtdb.firebaseio.com/tasks.json',  method: 'POST',
    body: { text: taskText },
    headers: {
      'Content-Type': 'application/json',
    }}, createNewTask.bind(null,taskText))
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;

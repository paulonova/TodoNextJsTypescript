import { Todo } from "@/interfaces/Todo";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API as string;

/**
 * *** REMOVE TODO
 */

// Function to delete a todo from the server
export const deleteTodoFromServer = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API as string}/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting todo:", error);
    return false;
  }
};

// Handle removing a todo
export const handleRemove = (
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  id: number
) => {
  // Update the UI
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);

  // Try to delete the todo from the server
  deleteTodoFromServer(id);
};


/**
 * *** UPDATE TODO
 */

// Function to update the "completed" status of a todo on the server
export const updateTodoOnServer = async (id: number, completed: boolean): Promise<boolean> => {
  try {
    await axios.put(`${process.env.NEXT_PUBLIC_API as string}/${id}`, { completed });
    return true;
  } catch (error) {
    console.warn("This is a Fake API, you can´t update..");
    console.warn("Error updating todo:", error);
    return false;
  }
};

// Handle toggling the completed status of a todo
export const handleToggle = (
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  id: number,
  completed: boolean
) => {
  // Update the UI
  const updatedTodos = todos.map((todo) => 
    todo.id === id ? { ...todo, completed } : todo
  );
  setTodos(updatedTodos);

  // Send the update to the server
  updateTodoOnServer(id, completed);
};



/**
 * *** CREATE TODO
 */

// Function to add a new todo
export const addNewTodoToServer = async (newTodo: Todo): Promise<Todo | null> => {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_API as string, newTodo);
    return response.data;
  } catch (error) {
    console.error("Error creating todo:", error);
    return null;
  }
};

// Handle adding a new todo
export const handleAddNewTodo = (
  createNewTask: string,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setCreateNewTask: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  if (createNewTask?.trim() === "") {
    return; // Don't add empty todos
  }

  const newTodo: Todo = {
    userId: 1,
    id: Date.now(), // Generate a unique temporary ID
    title: createNewTask,
    completed: false,
  };

  // Update the UI
  setTodos(prevTodos => [newTodo, ...prevTodos]);
  setCreateNewTask("");

  addNewTodoToServer(newTodo).then((savedTodo) => {
    if (savedTodo) {
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === newTodo.id ? { ...todo, id: Date.now() } : todo
        )
      );
    } else {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== newTodo.id));
    }
  });
};
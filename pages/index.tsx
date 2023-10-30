import Head from "next/head";
import TodoList from "@/components/TodoList";
import axios from "axios";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Todo } from "@/interfaces/Todo";
import { handleAddNewTodo, handleRemove, handleToggle } from "@/utils/handlers";
import AddTask from "@/components/AddTask";


const Home: React.FC<{ data: Todo[] }> = ({ data }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [createNewTask, setCreateNewTask] = useState<string>();


  useEffect(() => {
    setTodos(data);
  }, [data]);

  // Wrap createNewTask to match the expected signature
  const createNewTaskCallBack = (newTaskText: string) => {
    handleAddNewTodo(newTaskText, todos, setTodos, setCreateNewTask);
  };

  // Wrap handleRemove to match the expected signature
  const removeTodo = (id: number) => {
    handleRemove(todos, setTodos, id);
  };

  // Wrap handleToggle to match the expected signature
  const toggleTodo = (id: number, completed: boolean) => {
    handleToggle(todos, setTodos, id, completed);
  };

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <Head>
        <title>HiQ todo list</title>
        <meta property="og:title" content="HiQ code test" key="title" />
      </Head>
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">My todo list</h1>
        <AddTask addNewTask={createNewTaskCallBack} todos={[]} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_API as string);
  const data: Todo[] = response.data;
  return {
    props: {
      data,
    },
  };
};

export default Home;

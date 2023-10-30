import { useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import AddTask from "../AddTask";
import { Todo, TodoItemProps } from "@/interfaces/Todo";

const TodoList: React.FC<TodoItemProps> = ({
  todos,
  onToggle,
  onRemove
}) => {
  console.log("TODOS:", todos);
  const PAGE_SIZE: number = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newTaskFromAddTask, setNewTaskFromAddTask] = useState<string>();

  const totalPages = Math.ceil(todos.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleTodos = todos.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Is completed</th>
            </tr>
          </thead>
          <tbody>
            {visibleTodos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => onToggle(todo.id, !todo.completed)}
                      data-testid={`todo-checkbox-${todo.id}`}
                    />
                  </td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? "Completed" : "Not Completed"}</td>
                  <td>
                    <button
                      data-testid={`todo-remove-${todo.id}`}
                      onClick={() => onRemove(todo.id)}
                    >
                      <BsTrash3Fill />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="join mt-5">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="join-item btn"
        >
          «
        </button>
        <button className="join-item btn">Page {currentPage}</button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="join-item btn"
        >
          »
        </button>
      </div>
    </div>
  );
};

export default TodoList;

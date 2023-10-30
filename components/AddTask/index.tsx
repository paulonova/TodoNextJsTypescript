import { AddTaskProps, Todo } from "@/interfaces/Todo";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddTask: React.FC<AddTaskProps> = ({ addNewTask }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState("");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleAddTask = () => {
    setModalOpen(!modalOpen);
    if (newTask.trim()) {
      addNewTask(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <div className="my-5">
      <button
        onClick={toggleModal}
        className=" btn btn-primary w-[85%] lg:w-full"
      >
        Add new task <AiOutlinePlus size={18} />
      </button>

      {modalOpen ? (
        <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
          <div className="modal-box">
          <button onClick={toggleModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="text-lg font-bold">New Task</h3>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs z-[100]"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
            </div>
            <button onClick={handleAddTask} className="btn btn-primary mt-5">
              Add
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AddTask;

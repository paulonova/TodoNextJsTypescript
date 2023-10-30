/**
 * All Interfaces
 */

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


export interface ModalProps{
  modalOpen: boolean;
  closeModal: () => void;
}

export interface AddTaskProps {
  todos: Todo[];
  addNewTask: (newTask: string) => void;
}

export interface TodoItemProps {
  todos: Todo[];
  onToggle: (id: number, completed: boolean) => void;
  onRemove: (id: number) => void;
}
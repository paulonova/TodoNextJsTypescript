import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '@/components/TodoList';
import '@testing-library/jest-dom';
import { describe } from 'node:test';


const mockToggle = jest.fn();
const mockRemove = jest.fn();

const mockTodos = [
  { id: 1, title: 'Buy groceries', completed: false, userId: 1 },
  { id: 2, title: 'Go to gym', completed: true, userId: 1 },
];

describe('<TodoList />', () => {
  beforeEach(() => {
    render(
      <TodoList
        todos={mockTodos}
        onToggle={mockToggle}
        onRemove={mockRemove}
      />
    );
  });

  it('renders todos correctly', () => {
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.getByText('Go to gym')).toBeInTheDocument();
  });

  it('calls onToggle function when a todo checkbox is clicked', () => {
    const checkbox = screen.getByTestId('todo-checkbox-1');
    fireEvent.click(checkbox);
    expect(mockToggle).toHaveBeenCalledWith(1, true);
  });

  it('calls onRemove function when remove button is clicked', () => {
    const removeButton = screen.getByTestId('todo-remove-1');
    fireEvent.click(removeButton);
    expect(mockRemove).toHaveBeenCalledWith(1);
  });
});

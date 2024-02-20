import React, { useState } from 'react';

// Define interface for Todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface SchoolTodo extends Todo {
    dueDate: number;
    subject: Subject
}

enum Subject {
    Math = 'math',
    Coding = 'coding',
    English = 'english'
  }

export function TodoList() {
  
  const [todos, setTodos] = useState<Todo[]>([]);
  //remind shows what happen when deleting type
  const [inputValue, setInputValue] = useState<string>('');

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  // Function to handle toggling todo completion
  const toggleTodo = (id: number): void => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to handle removing a todo
  const removeTodo = (id: number): void => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button className="remove" onClick={() => removeTodo(todo.id)} 
            >Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};



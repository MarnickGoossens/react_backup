import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../store';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);


  function addItem() {
    if (inputValue.trim() === '') {
      return; // Prevent adding empty todo items
    }
    
    const newItem = {
      id: getId(),
      text: inputValue,
      isCompleted: false,
    };
    setTodoList((todoList) => [...todoList, newItem]);
    setInputValue('')    
  }

  function getId() {
    return (todoList.length === 0) ? 1 : Math.max(...todoList.map(todo => todo.id)) + 1;
  }
  

  function handleChange(event) {
    setInputValue(event.target.value);
  } 

  return (
    <p>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </p>
  );
}

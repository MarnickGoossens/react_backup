import { useState } from 'react';
import InputForm from "./input_form";
import TodoItems from "./todo_items";

function TodoList() {
  const initial = [
    { text: "First todo item", date: "16/06", key: "1" },
    { text: "Second todo item", date: "09/10", key: "2" }
  ];
  const [items, setItems] = useState(initial)
  
  function handleInsert(task) {
    const today = new Date();
    const shortDate = today.getDate() +
        "/" + (today.getMonth() + 1) 
    setItems([
      ...items,
      { text: task, date: shortDate, key: Date.now() }
    ]);
  }

  function handleDelete(item) {
    setItems(
      items.filter(i =>
        i.key !== item.key
      )
    );
  }

  return (
    <div className="todoListMain">
      <InputForm handleInsert={handleInsert} />
      <TodoItems items={items} handleDelete={handleDelete} />
    </div>
  );
}

export default TodoList;
import { useRecoilState } from "recoil";
import { todoListState } from '../store';

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  var divStyle = {
    marginTop: 5
  };

  function editItemText() {
    const index =  todoList.findIndex((todoList) => todoList === item);
    setTodoList([
      ...todoList.slice(0,index), {...item, text: event.target.value},...todoList.slice(index + 1)
    ]);
  }

  function toggleItemCompletion() {
    const index =  todoList.findIndex((todoList) => todoList === item);
    setTodoList([
      ...todoList.slice(0,index), {...item, isCompleted: event.target.checked},...todoList.slice(index + 1)
    ]);
  }

  function deleteItem() {
    const index =  todoList.findIndex((todoList) => todoList === item);
    setTodoList([
      ...todoList.slice(0,index), ...todoList.slice(index + 1)
    ]);
  }

  return (
    <div style={divStyle}>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

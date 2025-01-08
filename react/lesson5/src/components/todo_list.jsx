import TodoItem from "./todo_item";
import TodoItemCreator from './todo_item_creator';
import { todoListFilteredState } from '../store'
import TodoListFilters from "./todo_list_filters";
import { useRecoilValue } from "recoil";
import TodoListStats from "./todo_list_stats"

export default function TodoList() {
  const todoList = useRecoilValue(todoListFilteredState)

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

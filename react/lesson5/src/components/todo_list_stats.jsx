import { useRecoilValue } from "recoil";
import {todoListStatsState} from "../store"

export default function TodoListStats() {
  const stats = useRecoilValue(todoListStatsState)

  return (
    <ul>
      <li>Total items: {stats.totalNum}</li>
      <li>Items completed: {stats.totalCompletedNum}</li>
      <li>Items not completed: {stats.totalUncompletedNum}</li>
      <li>Percent completed: {stats.percentCompleted}</li>
    </ul>
  );
}
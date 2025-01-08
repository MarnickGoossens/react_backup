import { RecoilRoot } from 'recoil';
import './App.css';

import CharacterCounter from './components/recoil_character_counter';
import TodoList from './components/todo_list'

function App() {
  return (
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      <TodoList />
    </RecoilRoot>
  );
}

export default App;

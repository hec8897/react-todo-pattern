import { useState } from 'react';
import TodoList from './component/list';

function App() {
  const [list, SetList] = useState(
    [
      { id: 0, desc: 'dawoon' },
      { id: 1, desc: 'dawoon-2' },
    ]
  );

  return (
    <div className="App">
      <TodoList list={list}/>
    </div >
  );
}

export default App;

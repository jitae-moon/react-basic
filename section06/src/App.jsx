import { useState } from 'react';
import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';

function App() {
  // State lifting -> state 부모 component로 끌어올리기
  const [count, setCount] = useState(0)

  const onClickBtn = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickBtn={onClickBtn} />
      </section>
    </div>
  );
}

export default App

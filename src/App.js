import './App.css';

import {useState, useEffect} from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  useEffect(() => {
    setAge(count + 20);
  }, [count]); // 👈️ included count

  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>
        Increment count {count}
      </button>

      <p>Age: {age}</p>
    </div>
  );
}

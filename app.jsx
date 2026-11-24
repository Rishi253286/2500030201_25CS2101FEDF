
import { useState } from 'react';
import './App.css';
 
function App() {
  const [count, setCount] = useState(0);
 
  return (
    <div className="container">
      <h1>React + Vite Example</h1>
      <p>Counter App using useState()</p>
 
      <div className="buttons">
        <button onClick={() => setCount(count - 1)}>
          -
        </button>
 
        <span className="count">{count}</span>
 
        <button onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
 
      <button className="reset"
        onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
 
export default App;
 
 
App.css
.container {
  text-align: center;
  margin: 100px auto;
  padding: 30px;
  max-width: 450px;
  font-family: Arial, sans-serif;
  background-color: #f4f7ff;
  border-radius: 15px;
}
 
h1 {
  color: #2563eb;
}
 
p {
  font-size: 18px;
}
 
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 25px;
}
 
button {
  padding: 12px 22px;
  font-size: 20px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
 
button:hover {
  background-color: #1d4ed8;
}
 
.count {
  font-size: 28px;
  font-weight: bold;
  min-width: 40px;
}
 
.reset {
  margin-top: 25px;
  background-color: #dc2626;
}
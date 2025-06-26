import { useEffect, useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {})
    .catch(error => console.error('Error al obtener tareas:', error));
}, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Tareas Completadas</h1>
      <ul></ul>
    </div>
  );
}

export default App;

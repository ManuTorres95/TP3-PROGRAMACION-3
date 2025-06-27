import React, { useState } from 'react';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('');

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Calculadora de IMC</h2>
    </div>
  );
}

export default App;

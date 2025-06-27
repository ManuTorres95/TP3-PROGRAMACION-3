import React, { useState } from 'react';

function BotonesAlternados() {
  const [habilitado, setHabilitado] = useState('izquierdo');

  return (
    <main style={{ textAlign: 'center', marginTop: '500px' }}>
      <button
        onClick={() => setHabilitado('derecho')}
        disabled={habilitado !== 'izquierdo'}
      >
        Izquierdo
      </button>

      <button
        onClick={() => setHabilitado('izquierdo')}
        disabled={habilitado !== 'derecho'}
        style={{ marginLeft: '60px' }}
      >
        Derecho
      </button>
    </main>
  );
}

export default BotonesAlternados;

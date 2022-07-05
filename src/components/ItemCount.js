import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    setCount(count + 1);
  };

  const descrementar = () => {
    setCount((valAnt) => (valAnt > 0 ? count - 1 : count));
  };

  return (
    <div>
      <h3>{count}</h3>
      <button type="button" className="btn btn-secondary" onClick={descrementar}> - </button>
      <button type="button" className="btn btn-secondary" onClick={incrementar}> + </button>
      <button type="button" className="btn btn-secondary" onClick ={() => {
        if (count <= stock){
          onAdd(count);
        } else {
          alert("No hay suficientes productos")
        }
      }}> Agregar al carrito </button>
    </div>
  );
};

export default ItemCount;

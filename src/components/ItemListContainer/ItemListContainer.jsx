import React from 'react';

export default function ItemListContainer({ greeting, color }) {
  return (
    <div>
      <h2 style={{ color: color }}>{greeting}</h2>
    </div>
  );
}

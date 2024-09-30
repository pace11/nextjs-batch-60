import { useState } from 'react';

// contoh component stateful
export default function ProductCard() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Produt Card {count}
      <button onClick={() => setCount((count) => count + 1)}>
        Count Number
      </button>
    </div>
  );
}

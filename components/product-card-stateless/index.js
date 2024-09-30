// contoh component stateful
export default function ProductCardStateless({ count, setCount }) {
  return (
    <div>
      Produt Card {count}
      <button onClick={() => setCount()}>Count Number</button>
    </div>
  );
}

import { useState } from "react";
export default function Form({ handlelist }) {
  const [description, setdescripton] = useState("");
  const [quantity, setquantity] = useState();

  function handlesubmit(e) {
    e.preventDefault();
    console.log(quantity)
    if (!description) return;
    const newitem = { description, quantity, packed: false, id: Date.now() };
    // initialItems[[...id, description, quantity, packed]];
    handlelist(newitem);
    setdescripton("");
    setquantity(1);
  }

  return (
    <form className="add-form" onSubmit={handlesubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setdescripton(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

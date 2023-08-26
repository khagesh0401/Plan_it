import { useState } from "react";
import Item from "./item";
export default function Packinglist({
  list,
  handledelete,
  handleupdate,
  handledeleteall,
}) {
  const [sortby, setsortby] = useState("input");

  let sortingitem;

  if (sortby === "input") sortingitem = list;
  if (sortby === "description") {
    sortingitem = list
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortby === "packed") {
    sortingitem = list
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortingitem.map((item) => (
          <Item
            item={item}
            handledelete={handledelete}
            handleupdate={handleupdate}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setsortby(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handledeleteall}>Reset</button>
      </div>
    </div>
  );
}

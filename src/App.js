import { useState } from "react";
import "./App.css";
import Logo from "./components/logo";
import Form from "./components/form";
import Packinglist from "./components/packinglist";
import Stats from "./components/stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "toothbrush", quantity: 2, packed: false },
//   { id: 4, description: "charger", quantity: 1, packed: false },
// ];

function App() {
  const [list, setlist] = useState([]);
  let count = 0;

  function handlelist(item) {
    setlist([...list, item]);
  }

  function handledelete(id) {
    setlist((e) => e.filter((ele) => ele.id !== id));
  }

  function handleupdate(id) {
    setlist((e) =>
      e.map((ele) => (ele.id === id ? { ...ele, packed: !ele.packed } : ele))
    );
  }
  function handledeleteall() {
    const confirm = window.confirm("Are you sure, You want to clear all items");
    confirm && setlist([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form handlelist={handlelist} />
      <Packinglist
        list={list}
        handledelete={handledelete}
        handleupdate={handleupdate}
        handledeleteall={handledeleteall}
      />
      <Stats list={list} />
    </div>
  );
}

export default App;

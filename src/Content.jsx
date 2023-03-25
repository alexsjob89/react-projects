import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} /> : <h1 style={{ marginTop: "1rem", textDecoration: "underline" }}>Your list is empty</h1>}
    </main>
  );
};

export default Content;
